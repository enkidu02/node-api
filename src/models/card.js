export default (sequelize, Sequelize) => {
  const card = sequelize.define("card", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    cardName: {
      type: Sequelize.TEXT
    },
    cardDescription: {
      type: Sequelize.STRING(700)
    },
    voiceResult: {
      type: Sequelize.STRING(500)
    },
    imageResult: {
      type: Sequelize.STRING(500)
    },
  })
  return card
}