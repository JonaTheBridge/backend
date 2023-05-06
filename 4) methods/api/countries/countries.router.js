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
  const { query } = req; // { region: 'Americas' }
  const queryKeys = Object.keys(query); // ['region']
  const queryValues = Object.values(query); // ['Americas']
  let filteredCountries = countries;
  for (let index = 0; index < queryKeys.length; index++) {
    const queryKey = queryKeys[index]; // 'region'
    const queryValue = queryValues[index]; // 'Americas'
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

router.post('', (req, res) => {
  const country = req.body;
  countries.push(country);
  res.json(country);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const newCountry = req.body;
  const index = countries.findIndex((country) => country.id?.toString() === id.toString());
  countries[index] = newCountry;
  res.json(countries[index]);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const newProps = req.body;
  const index = countries.findIndex((country) => country.id?.toString() === id.toString());
  countries[index] = { ...countries[index], ...newProps };
  res.json(countries[index]);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = countries.findIndex((country) => country.id?.toString() === id.toString());
  countries.splice(index, 1);
  res.json(countries);
});

export default router;
