import { getDBConnection } from '../db/db.js'

export const addBookmarks = async (req, res) => {
    const db = await getDBConnection()
    //Jäsentää ja validoi bookmarkID
    const bookmarkId = parsenInt(req.body.bookmarkId, 10)
    if (isNan(bookmarkId)) {
        return res.status(400).json({ error: 'Invalid product ID'})
    }
    //Hakee käyttäjä ID sessioista
    const userID = req.session.userId
    const existing = await db.get('SELECT * FROM bookmarks WHERE user_id = ? AND bookmark_id = ?',
     [userId, bookmarkId])
    await db.run('INSERT INTO bookmarks (user_id, bookmark_id)') 
    }

