const logger = require('morgan');
const bodyParser = require('body-parser');
const express = require('express')

const app = express()
const port = process.env.PORT

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./routes')(app);
app.get('*', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
})