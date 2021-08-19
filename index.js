const express = require('express')
const app = express()
const pool = require('./db')

app.use(express.json()) // => res.body

//ROUTES//

// get all word types
app.get('/wordTypes', async (req, res) => {
  try {
    const wordTypes = await pool.query('SELECT * FROM types')

    res.json(wordTypes.rows)
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(8000, () => {
  console.log('Server is listening on port 8000')
})
