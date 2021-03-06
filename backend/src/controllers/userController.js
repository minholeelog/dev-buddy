import { db } from '../config/db'
import bcrypt from 'bcrypt'
import { joinUser, existEmail, existUserInfo } from '../sql/query'

// 회원 가입
export const signup = (req, res) => {
  const {
    body: { email, name, password },
  } = req

  db.query(existEmail, [email], (err, row) => {
    // 이메일이 DB에 존재하지 않을 경우
    if (row[0] === undefined) {
      // 비밀번호 암호화
      const saltedPw = bcrypt.hashSync(password, 10)
      const user = { email, name, password: saltedPw }
      // 회원 정보 DB 저장
      db.query(joinUser, user, (err, row2) => {
        if (err) throw err
        return res
          .status(200)
          .json({ result: 1, message: '회원가입 성공했습니다.' })
      })
    } else {
      return res.status(400).json({ result: 0 })
    }
  })
}

// 로그인 - 콜백지옥.... 개선 필요
export const login = (req, res) => {
  const {
    body: { email, password },
  } = req
  // 이메일이 DB에 존재한다면 이메일과 비밀번호 리턴
  db.query(existUserInfo, [email], (err, row) => {
    // 이메일이 DB에 존재하지 않는 경우
    // TODO: new Error 객체로 에러 핸들링하기
    if (!row[0]) {
      return res.json({
        result: 0,
        message: '등록되지 않은 이메일 주소입니다.',
      })
      // DB에 등록된 이메일 일 경우
    } else if (row[0] !== undefined && row[0].email === email) {
      bcrypt.compare(password, row[0].password, (err, isCorrect) => {
        // 비밀번호가 일치하지 않을 경우
        if (!isCorrect) {
          return res.status(400).json({
            result: 0,
            message: '비밀번호를 다시 입력하세요.',
          })
        }
        // 세션을 클라이언트로 전송 - 개선 필요
        const { uid, email, name } = row[0]
        req.session.authenticated = true
        return res.status(200).json({
          result: 1,
          message: '로그인 성공했습니다.',
          token: req.sessionID,
          user: { id: uid, name, email },
        })
      })
    }
  })
}

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err
    console.log('세션을 삭제하고 로그아웃 합니다.')
  })
  res.status(200).json({
    result: 1,
    message: '로그아웃 성공',
  })
}
