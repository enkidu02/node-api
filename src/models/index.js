import { sequelize, Sequelize } from '../config'
import user from './user'
import dairy from './dairy'
import alarm from './alarm'
import bear from './bear'
import result from './result'
import voice from './voice'
import card from './card'

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = user(sequelize, Sequelize)
db.dairy = dairy(sequelize, Sequelize)
db.alarm = alarm(sequelize, Sequelize)
db.bear = bear(sequelize, Sequelize)
db.result = result(sequelize, Sequelize)
db.voice = voice(sequelize, Sequelize)
db.card = card(sequelize, Sequelize)

// User Relation
db.user.hasMany(db.dairy, {
  as: 'dairies'
})
db.user.hasMany(db.result, {
  as: 'results'
})
db.user.hasMany(db.voice, {
  as: 'voices'
})

// Dairy Relation
db.dairy.belongsTo(db.user, {
  foreignKey: 'id',
  as: 'user'
})

// Result Relation
db.result.belongsTo(db.user, {
  foreignKey: 'id',
  as: 'user'
})
db.result.belongsTo(db.card, {
  foreignKey: 'id',
  as: 'card'
})

// Card Relation
db.card.hasOne(db.result, {
  as: 'result'
})
db.card.hasOne(db.bear, {
  as: 'bear'
})

// Bear Relation
db.bear.belongsTo(db.card, {
  foreignKey: 'id',
  as: 'card'
})
// db.bear.has(db.bear, {
//   foreignKey: 'id',
//   as: 'bear'
// })


export default db