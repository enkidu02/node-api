export default (sequelize, Sequelize) => {
  const result = sequelize.define("result", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    lastAnswer: {
      type: Sequelize.STRING(100)
    },
  })
  return result
}