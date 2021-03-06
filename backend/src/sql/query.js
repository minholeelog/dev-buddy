export const joinUser = `INSERT INTO user set ?`

export const existEmail = `SELECT email FROM user WHERE email=?`

export const existEmailPw = `SELECT email , password FROM user WHERE email=?`

export const existUserInfo = `SELECT uid, email, name, password, created_at FROM user WHERE email=?`

export const createPost = `INSERT INTO post set ?`

export const allPosts = `SELECT user.name, post.pid, post.title, post.user_id as post_uid, post.created_at as createdAt, post.views FROM user, post WHERE user.uid = post.user_id ORDER BY post.pid DESC`

export const findPostById = `SELECT user.name as author, post.pid, post.title, post.content, post.user_id, post.created_at, post.updated_at, post.is_updated, post.views FROM user, post WHERE post.user_id = user.uid AND pid=?`

export const countPostView = `UPDATE post SET views=views + 1 WHERE pid=?`

export const updatePostById = `UPDATE post SET title=?, content=?, is_updated=1 WHERE pid=?`

export const deletePostById = `DELETE FROM post WHERE pid=?`
