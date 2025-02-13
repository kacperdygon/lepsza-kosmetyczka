import express, { json } from 'express'
import cors from 'cors'
const app = express()
const port = 3000

// Umożliwienie CORS dla wszystkich źródeł (frontend na localhost:8080)
app.use(cors())

// Parsowanie JSON w ciele żądania
app.use(json())

// Endpoint do wysyłania e-maila
app.post('/api/send-mail', (req, res) => {
  console.log(req)

  // Odpowiedź potwierdzająca
  res.json({ message: 'E-mail wysłany pomyślnie' })
})

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`)
})
