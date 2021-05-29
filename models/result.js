module.exports = (sequelize, DataTypes) => {
  const result = sequelize.define('result', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    lastAnswer: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  })

  result.associate = (models) => {
    result.hasMany(models.answer, {
      as: 'answers'
    })
  }
  return result
}