import getDBConnection from '../db.js'

//Hakee kaikki kategoriat tietokannasta
export const getCategories = async (req, res) => {
  try {
    const db = await getDBConnection()
    //Hakee kaikki kategoriat words-taulusta
    const categoriesRows = await db.all('SELECT DISTINCT categories FROM words')
    //Muuttaa kategoria rivit array muotoon ja palauttaa ne JSONnina
    const categories = categoriesRows.map(row => row.categories)
    res.json(categories)
    //Error jos fetch epäonnistuu
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch categories', details: err.message })
  }
}

//Hakee kaikki sanat tieotakannasta
export const getWord = async (req, res) => {
  try {
    const db = await getDBConnection()
    const { categories, search } = req.query

    let query = 'SELECT * FROM words'
    const params = []
//filteröi sanat kategorioittain
    if (categories) {
      query += ' WHERE categories = ?'
      params.push(categories)
//Hakee sanat sanan, käännöksen tai kategorian avulla
    } else if (search) {
      query += ' WHERE word LIKE ? OR translation LIKE ? OR categories LIKE ?'
      const searchPattern = `%${search}%`
      params.push(searchPattern, searchPattern, searchPattern)
    }
//Suorittaa Queryn, hakee tulokset ja palauttaa ne JSONina
    const words = await db.all(query, params)
    res.json(words)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch words', details: err.message })
  }
}