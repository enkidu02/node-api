export default (sequelize, Sequelize) => {
  const bear = sequelize.define('bear', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    }
  })
  return bear
}
