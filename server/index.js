const express = require('express');
const app = express();
const bp = require('body-parser');
const db = require('../models');
const { Card } = db;

const PORT = process.env.PORT || 3001;

// this file will handle DB

app.use(bp.urlencoded());

app.get('/cards', (req, res)=> {
  Card.findAll()
    .then((cards) => {
      console.log(cards);
      res.json(cards);
    });
});

app.post('/cards', (req, res) => {
  Card.create({
    title: req.body.title,
    priority: req.body.priority,
    assignedTo: req.body.assignedTo,
    createdBy: req.body.createdBy,
    status: req.body.status
  })
  .then(() => {
    Card.findAll()
      .then((cards) => {
        res.json(cards);
      })
      .catch((err) => {
        throw err;
      });
  });
});

app.delete('/cards/:id/edit', (req, res) => {
  Card.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    Card.findAll()
      .then((cards) => {
        console.log('DELETE SUCCESS!!');
        res.json(cards);
      });
  })
  .catch((err) => {
    throw err;
  });
});

app.put('/cards/:id/edit', (req, res) => {
  var cardId = parseInt(req.params.id);
  Card.findById(cardId)
    .then((card) => {
      card.update(req.body)
        .then(() => {
          Card.findAll()
            .then((cards) => {
              res.json(cards);
            });
        });
    });
});

const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`Server running on ${PORT}`);
});