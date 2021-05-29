module.exports = (sequelize, DataTypes) => {
  const answer = sequelize.define('answer', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_prompt: {
      type: DataTypes.STRING(500)
    }
  })

  answer.associate = (models) => {
    answer.belongsTo(models.questionaire, {
      foreignKey: 'id',
      as: 'questionaire'
    })
    answer.belongsTo(models.choice, {
      foreignKey: 'id',
      as: 'choice'
    })
    answer.belongsTo(models.result, {
      foreignKey: 'id',
      as: 'result'
    })
  }
  return answer
}