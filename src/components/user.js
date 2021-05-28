import db from '../config'

const listUser = (req, res) => {
  db.query(`SELECT * FROM UserProfile ORDER BY ASC`, (err, results) => {

  })
}
const getUsers = (req, res) => { }
const createUser = (req, res) => { }
const updateUser = (req, res) => { }
const deleteUser = (req, res) => { }

export default { listUser, getUsers, createUser, updateUser, deleteUser }