const express = require ('express');
const model = require('../model/index.js')
const router = express.Router();

router.get('/data', (req, res) => {
  res.send('hello');
})

router.post('/data', (req, res) => {

})

module.exports = router;
