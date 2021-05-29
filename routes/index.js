const questionaireController = require('../controllers').questionaire;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/questionaires', questionaireController.create);
  app.get('/api/questionaires', questionaireController.list);
};