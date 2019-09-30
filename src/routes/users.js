var express = require('express');
var router = express.Router();
let mongoose = require('mongoose')
const {list, show, create, update, remove} = require("../controllers/userControllers");

router.get('/users', list);
  
  router.get('/users/:userId', show);
  
  router.post('/users', create);

  router.put('/users/:userId', update);

  // router.delete('/users', remove);

  module.exports = router;

