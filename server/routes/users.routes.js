const express = require('express')
const usersCtrl = require('../controllers/users.controller')

const router = express.Router()

router.route('/api/users')
  .get(usersCtrl.list)

module.exports = router
