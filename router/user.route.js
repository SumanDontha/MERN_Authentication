const express = require('express')
const User = require('../model/user.model')
const router = express.Router()

router.post('/auth/signin', (req, res) => {
  console.log(req.body)
})

router.post('/auth/signup', (req, res) => {
  const user = new User(req.body);
  user.save().then((result) => {
    res.json(result)
  }).catch(err => res.json(err))
})

module.exports = router;