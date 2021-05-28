export default (sequelize, Sequelize) => {
  const dairy = sequelize.define('dairy', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING(45)
    },
    content: {
      type: Sequelize.STRING(100)
    },
    feel: {
      type: Sequelize.TEXT
    }
  })
  return dairy
}
