import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

const getDBConnection = () => {

    const dbPath = path.join(process.cwd(), 'database.db')

        return open({
            filename: dbPath,
            driver: sqlite3.Database
        })
}

export default getDBConnection;