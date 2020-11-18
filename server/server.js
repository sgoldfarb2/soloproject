const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
let data = require('../db.json')
const fileController = require('../controllers/fileController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'production') {
    // statically serve everything in the build folder on the route '/build'
    app.use('/bundle', express.static(path.join(__dirname, '../bundle')));
    // serve index.html on the route '/'
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../index.html'));
    
    });
  }

  app.get('/dogs', fileController.getDogs, (req, res) => {
    res.json(res.locals.dogs)
  })

  app.post('/newDog', fileController.newDogEntry, fileController.getDogs, (req, res) => {
    res.json(res.locals.dogs)
  })


  app.delete('/deletedDog', (req, res) => {
    
  });

  app.listen(3000, () => {
      console.log('App listening on port 3000!');
  });

  module.exports = app;