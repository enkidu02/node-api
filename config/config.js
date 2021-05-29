require('dotenv').config()
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "i_bear_you_dev",
    "host": DB_HOST,
    "dialect": "postgres",
    "define": {
      "underscored": true,
      "freezeTableName": true,
      "charset": 'utf8',
      "dialectOptions": {
        "collate": 'utf8_general_ci'
      },
      "timestamps": false
    }
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "i_bear_you_test",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "i_bear_you",
    "host": DB_HOST,
    "dialect": "postgres"
  }
}
