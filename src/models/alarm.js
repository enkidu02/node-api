export default (sequelize, Sequelize) => {
  const alarm = sequelize.define("alarm", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    alarmName: {
      type: Sequelize.STRING(45)
    },
    alarmTime: {
      type: Sequelize.DATE
    },
    alarmVoice: {
      type: Sequelize.STRING(45)
    },
  })
  return alarm
}