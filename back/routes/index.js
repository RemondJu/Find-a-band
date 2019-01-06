import express from 'express';

const connection = require('./conf');

connection.connect((err) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Connected');
  }
});

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express is working'
  });
});

router.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.log('Error during users fetching: ', err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

export default router;
