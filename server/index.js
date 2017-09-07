/*jshint esversion:6*/
const express = require('express');
const app = express();
const db = require('../models');
const { Card } = db;

const PORT = process.env.PORT || 3001;

app.get('/cards', (req, res)=> {
  res.json({
  "Queue": [
    {
      "_id": 1,
      "title": "Make Better Styles",
      "priority": "medium",
      "status": "Queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 2,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "low",
      "status": "Queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 4,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "high",
      "status": "Queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    },
    {
      "_id": 22,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "blocker",
      "status": "Queue",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    }
  ],
  "in-progress": [
    {
      "_id": 7,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "medium",
      "status": "Progress",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    }
  ],
  "done": [
    {
      "_id": 25,
      "title": "Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles, Make Better Styles",
      "priority": "Medium",
      "status": "done",
      "createdBy": "Ben",
      "assignedTo": "Merlin"
    }
  ]
});
});

const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`Server funning on ${PORT}`);
});