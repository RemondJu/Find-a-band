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

router.get('/bands', (req, res) => {
  connection.query('SELECT * FROM bands', (err, result) => {
    if (err) {
      console.log('Error during users fetching: ', err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

router.get('/band/:id', (req, res) => {
  connection.query('SELECT * FROM bands WHERE band_id = ?', req.params.id, (err, result) => {
    if (err) {
      console.log('Error during band fetching: ', err);
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

router.get('/filter-bands/:filter', (req, res) => {
  connection.query(`SELECT * FROM bands WHERE name LIKE '%${req.params.filter}%'`, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(result);
    }
  });
});

export default router;
