import express from 'express';
import { allCountries } from '../controllers/allCountries';
import { countries } from '../controllers/countries';
import { country } from '../controllers/country';
import { main } from '../controllers/main';

const router = express.Router();

router.get('/', main);
router.get('/all', allCountries);
router.get('/country', country);
router.get('/countries', countries);

export const routes = router;
