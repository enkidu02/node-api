import { client } from '../config'

// List all role in database.
const getRoles = (req, res) => {
  client.query('SELECT * FROM roles ORDER BY id ASC', (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows)
  })
}

// Get role by role id.
const getRoleById = (req, res) => {
  const id = parseInt(req.params.id)

  client.query(`SELECT * FROM roles WHERE id = ${id}`, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows)
  })
}

// Create role
const createRole = (req, res) => {
  const { role_name } = req.body

  client.query(`INSERT INTO roles (role_name) VALUES ('${role_name}')`, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(201).send('Success')
  })
}

export default { getRoles, getRoleById, createRole }