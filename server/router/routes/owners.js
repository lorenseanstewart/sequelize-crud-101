'use strict';

module.exports = (app, db) => {
  app.get('/pets', (req, res) => {
    db.owners.findAll({})
      .then(owners => {
        res.json(owners);
      });
  });
};