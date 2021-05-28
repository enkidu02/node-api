export default (sequelize, Sequelize) => {
  const user = sequelize.define("user", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.TEXT
    },
    lastName: {
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.STRING(45)
    },
    email: {
      type: Sequelize.STRING(45)
    },
    gender: {
      type: Sequelize.TEXT
    },
    birthday: {
      type: Sequelize.DATEONLY
    }
  })
  return user
}