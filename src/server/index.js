import express from 'express'
import bodyParser from 'body-parser'
import db from '../models'
import components from '../components'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.")
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})