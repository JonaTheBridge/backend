import Router from 'express';
import countries from './countries.js';

const router = Router();

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

// http://localhost:3000/countries/all
router.get('/all', (req, res) => {
  res.json(countries);
});

router.get('/length', (req, res) => {
  res.json(countries.length);
});

router.get('/random', (req, res) => {
  const randomNumber = getRandomNumber(0, countries.length);
  res.json(countries[randomNumber]);
});

export default router;
