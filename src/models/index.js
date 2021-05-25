import { Pool } from 'pg'
import 'dotenv/config';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
})

// List all role in database.
const getRoles = (req, res) => {
  pool.query('SELECT * FROM roles ORDER BY id ASC', (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows)
  })
}

// Get role by role id.
const getRoleById = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query(`SELECT * FROM roles WHERE id = ${id}`, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows)
  })
}

// Create role
const createRole = (req, res) => {
  const { role_name } = req.body

  pool.query(`INSERT INTO roles (role_name) VALUES ('${role_name}')`, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(201).send('Success')
  })
}

export default { getRoles, getRoleById, createRole }