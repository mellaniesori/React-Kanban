const express = require('express');
const app = express();
const bp = require('body-parser');
const db = require('../models');
const { Card } = db;

const PORT = process.env.PORT || 8080;

// this file will handle DB

app.use(bp.urlencoded());

app.get('/', (req, res)=> {
  Card.findAll()
    .then((cards) => {
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
      });
  });
});

const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`Server running on ${PORT}`);
});