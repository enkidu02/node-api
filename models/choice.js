module.exports = (sequelize, DataTypes) => {
  const choice = sequelize.define('choice', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    choices: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    is_prompt: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })

  choice.associate = (models) => {
    choice.belongsTo(models.questionaire, {
      foreignKey: 'id',
      as: 'questionaire'
    })
    choice.belongsTo(models.questionaire, {
      foreignKey: 'next_question_id'
    })
    choice.hasOne(models.answer, {
      as: 'answer'
    })

  }
  return choice
}