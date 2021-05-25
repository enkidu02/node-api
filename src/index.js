import express from 'express'
import bodyParser from 'body-parser'
import models from './models'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/roles', models.getRoles)
app.get('/roles/:id', models.getRoleById)
app.post('/roles', models.createRole)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})