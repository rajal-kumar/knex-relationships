var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
  .then(function (users) {
    res.render('index', { users: users })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/profile/:id', function (req, res) {
  const id = Number(req.params.id)

  db.getUser(id, req.app.get('connection'))
    .then(function (user) {
      res.render('profile', user)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

module.exports = router
