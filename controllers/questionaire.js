const Questionaire = require('../models').questionaire;

module.exports = {
  create(req, res) {
    return Questionaire
      .create({
        title: req.body.title,
      })
      .then(questionaire => res.status(201).send(questionaire))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Questionaire
      .findAll()
      .then(questionaire => res.status(200).send(questionaire))
      .catch(error => res.status(400).send(error));
  },
};