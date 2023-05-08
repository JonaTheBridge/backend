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

router.get('/number/:number', (req, res) => {
  const { number } = req.params;
  res.json(countries[number]);
});

router.get('/filter', (req, res) => {
  const { query } = req;
  const queryKeys = Object.keys(query);
  const queryValues = Object.values(query);
  let filteredCountries = countries;
  for (let index = 0; index < queryKeys.length; index++) {
    const queryKey = queryKeys[index];
    const queryValue = queryValues[index];
    filteredCountries = countries.filter((country) => {
      const countryValue = country[queryKey];
      const stringifiedValue = JSON.stringify(countryValue);
      const countryValueType = typeof countryValue;
      const countryValueAsString = countryValueType !== 'string' ? stringifiedValue : countryValue;
      return countryValueAsString === queryValue;
    });
  }

  res.json(filteredCountries);
});

export default router;
