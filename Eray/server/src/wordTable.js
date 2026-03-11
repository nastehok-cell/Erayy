import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

const wordTable = async () => {
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS words (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            word TEXT NOT NULL,
            translation TEXT NOT NULL,
            example_sentence TEXT,
            categories TEXT
            )
    `)
    await db.exec(`
        CREATE TABLE if not exists bookmarks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            word_id INTEGER NOT NULL,
            FOREIGN KEY(word_id) REFERENCES words(id)
        )
    `)   
    await db.close()
    console.log()
}
wordTable()