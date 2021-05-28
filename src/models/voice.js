export default (sequelize, Sequelize) => {
  const voice = sequelize.define("voice", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    voiceName: {
      type: Sequelize.STRING(45)
    },
    voiceFile: {
      type: Sequelize.STRING(500)
    },
    recordingDate: {
      type: Sequelize.DATEONLY
    },
    totalTime: {
      type: Sequelize.TIME
    },
  })
  return voice
}