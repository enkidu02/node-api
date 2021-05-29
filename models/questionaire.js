module.exports = (sequelize, DataTypes) => {
  const questionaire = sequelize.define('questionaire', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_first: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })

  questionaire.associate = (models) => {
    questionaire.hasOne(models.choice, {
      foreignKey: 'next_question_id',
      as: 'choice'
    })
    questionaire.hasMany(models.choice, {
      as: 'choices'
    })
    questionaire.hasMany(models.answer, {
      as: 'answers'
    })

  }
  return questionaire
}