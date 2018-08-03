const express = require('express');
const models = require('../models/index');
const router = express.Router();

const addPage = require('../views/addPage');

module.exports = router;

router.get('/', (req, res) => {
  res.send('');
});
router.post('/', (req, res) => {
  res.json(req.body);
  // res.send('Im here');
});
router.get('/add', (req, res) => {
  res.send(addPage());
});
