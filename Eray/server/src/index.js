import express from 'express'
import { WordRouter } from './routes/Word.js'
import cors from 'cors'

const app = express()
const PORT = 8000

app.use(cors())
app.use(express.static('views'))
app.use('/api/Word', WordRouter)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
}).on('error', (err) => {
    console.error('failed to start server:', err)
})