const express = require('express')
const app = express()
const pool = require('./db')
const cors = require('cors')

// Middleware required for us to work with the request body
app.use(cors())
app.use(express.json())

//ROUTES//

/**
 * Getting all the word types
 */
app.get('/wordTypes', async (req, res) => {
  try {
    const wordTypes = await pool.query('SELECT * FROM types')

    res.json(wordTypes.rows)
  } catch (error) {
    console.error(error.message)
  }
})

/**
 * Getthing all words by word type id
 *
 * @param id - is the word type id
 */
app.get('/words/:id', async (req, res) => {
  const { id } = req.params

  try {
    const words = await pool.query('SELECT * FROM words WHERE fk_type_id = $1', [id])

    res.json(words.rows)
  } catch (error) {
    console.error(error.message)
  }
})

app.post('/sentence', async (req, res) => {
  try {
    const { sentence } = req.body
    const newSentence = await pool.query('INSERT INTO sentences (sentence) VALUES ($1) RETURNING *', [sentence])

    res.json(newSentence.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

/**
 * Getting all sentences saved in the database
 */
app.get('/sentences', async (req, res) => {
  try {
    const sentences = await pool.query('SELECT * FROM sentences ORDER BY id DESC')

    res.json(sentences.rows)
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(8000, () => {
  console.log('Server is listening on port 8000')
})
