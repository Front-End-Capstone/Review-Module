const express = require ('express');
const router = express.Router();

router.get('/data', (req, res) => {
  res.send('hello');
})

router.post('/data', (req, res) => {

})

module.exports = router;
