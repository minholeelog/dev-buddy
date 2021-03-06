# Dev Buddy

    ๐จโ๐ป๐ฉโ๐ป ๊ฐ๋ฐ ์คํฐ๋ ๋ชจ์ง ๊ฒ์ํ ๋ง๋ค๊ธฐ

### โป ๊ธฐ์  ์คํ

![stack](./databases/stack.png)

![front](https://img.shields.io/badge/Frontend-Vue-lightgreen?style=for-the-badge)
![back](https://img.shields.io/badge/Backend-Node-green?style=for-the-badge&logo=express)
![db](https://img.shields.io/badge/DB-Mysql-blue?style=for-the-badge&logo=mysql)

### ๐ฐ ์ฃผ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ

- Frontend

  - yarn: ํจํค์ง ๋งค๋์ ธ
  - vuex: ์ ์ญ ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
  - vuesax: ์คํ์ผ ํ๋ ์์ํฌ
  - axios: HTTP ๋น๋๊ธฐ ํต์  ๋ผ์ด๋ธ๋ฌ๋ฆฌ

- Backend
  - cors
  - bcrypt: ์ํธํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
  - morgan: HTTP ๋ก๊ฑฐ
  - dotenv: ํ๊ฒฝ ๋ณ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ

### ๐ฌ ์ค๊ณ

![erd](./databases/erd-02.png)

#### user

| ํ๋๋ช     | ํ์          | ํน์ฑ        |
| ---------- | ------------- | ----------- |
| uid        | int           | primary key |
| email      | varchar(50)   | unique key  |
| name       | varchar(30)   | not null    |
| password   | vharchar(255) | not null    |
| created_at | timestamp     | not null    |

#### post

| ํ๋๋ช     | ํ์         | ํน์ฑ                        |
| ---------- | ------------ | --------------------------- |
| pid        | int          | primary key                 |
| title      | varchar(255) | not null                    |
| content    | text         | not null                    |
| user_id    | int          | foreign key(user.uid)       |
| created_at | timestamp    | not null                    |
| updated_at | timestamp    | on update current_timestamp |
| is_updated | tinyint(1)   | default 0                   |
| views      | int          | default 0                   |

### ํ์ฌ๊น์ง ๊ตฌํ๋ ๊ธฐ๋ฅ๋ค

![capture](./databases/capture.gif)

- [x] ํ์ ๊ฐ์
- [x] ๋ก๊ทธ์ธ/ ๋ก๊ทธ์์/ ๋ก๊ทธ์ธ ์ ์ง
- [x] ํ์ ์ ๋ณด ์ ์ญ ์ํ ๊ด๋ฆฌ
- [x] ์๋ก๊ณ ์นจ ์ Vuex ์คํ ์ด ์ด๊ธฐํ ๋ฌธ์ 
- [x] ์ปดํฌ๋ํธ ๋ณ ๊ธฐ๋ณธ ํผ ์์ฑ
- [x] ํผ ์ ํจ์ฑ ๊ฒ์ฌ (์๋ฒ)
- [x] ํ์ฌ ์์น ๊ธฐ๋ฐ ๋ ์จ ์ ๋ณด ๊ฐ์ ธ์ค๊ธฐ
- [x] ๊ธฐ๋ณธ ์ฟผ๋ฆฌ๋ฌธ ์์ฑ (์์ฑ, ์กฐํ)
- [x] ๊ธฐ๋ณธ ์ฟผ๋ฆฌ๋ฌธ ์์ฑ (์์ , ์ญ์ )
- [x] ํ ์คํธ ํ์ ์๋ฆผ์ฐฝ ์ ์ฉ
- [x] ๋ฐ์ดํฐ ๋ฐ์ธ๋ฉ ๋ก๋ฉ ๋ฐ ์ ์ฉ
- [x] ๋ค๋น๊ฒ์ด์ ๊ฐ๋(์ ์ญ)
- [x] ๋ค๋น๊ฒ์ด์ ๊ฐ๋(ํฌ์คํ ์์ , ์ญ์ )
- [x] ํฌ์คํ ์กฐํ์ ํ์

### ๐ TODO

- [ ] ํผ ์ ํจ์ฑ ๊ฒ์ฌ (ํด๋ผ์ด์ธํธ, ์๋ฒ)
- [ ] JWT์ ํ์ฉํ ํ์ ์ธ์ฆ ๋ฐฉ์

### โผ ๋ก์ปฌ ํ์คํธ ๋ฐฉ๋ฒ

```bash
// Server
$ yarn server
```

```bash
// Client
$ yarn client
```

```bash
// Client + Server
$ yarn dev
```
