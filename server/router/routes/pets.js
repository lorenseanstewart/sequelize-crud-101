'use strict';

module.exports = (app, db) => {
  // GET all pets
  app.get('/pets', (req, res) => {
    db.pets.findAll()
      .then(pets => {
        res.json(pets);
      });
  });

  // GET one pet by id
  app.get('/pets/:id', (req, res) => {
    const id = req.params.id;
    db.pets.find({
      where: { id: id}
    })
      .then(pet => {
        res.json(pet);
      });
  });

  // POST single pet
  app.post('/pets', (req, res) => {
    const name = req.body.name;
    const owner_id = req.body.owner_id;
    const type = req.body.type;
    db.pets.create({
      name: name,
      owner_id: owner_id,
      type: type
    })
      .then(newPet => {
      res.json(newPet);
    });
  });

  // PATCH single pet
  app.put('/pets/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body;
    db.pets.find({
      where: { id: id }
    })
      .then(pet => {
        return pet.updateAttributes(updates);
      })
      .then(updatedPet => {
        res.json(updatedPet);
      });
  });

  app.delete('/pets/:id', (req, res) => {
    const id = req.params.id;
    db.pets.destroy({
      where: { id: id }
    })
      .then(deletedPet => {
        res.json(deletedPet);
      });
  });

};