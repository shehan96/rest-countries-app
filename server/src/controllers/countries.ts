import { ICountry } from './../types/country.types';
import { Request, Response, NextFunction } from 'express';
import { axiosCountries } from '../axios/axiosCountries';

/**
 * Get list of country data
 * Based on strings set in the names array
 * It can be the native name or partial name
 * This will get all country details which match string in the names array
 * @param req
 * @param res
 * @param next
 */
export const countries = async (req: Request, res: Response, next: NextFunction) => {
  /**
   * Check query parameter is set
   */
  if (Object.keys(req.query).length === 0) {
    res.status(404).json({
      code: 404,
      status: 'error',
      error: {
        code: 'NOT FOUND',
        message: 'Query parameter is not set',
      },
    });
  }

  /**
   * Check query parameter names is set
   */
  if (!('names' in req.query)) {
    res.status(404).json({
      code: 404,
      status: 'error',
      error: {
        code: 'NOT FOUND',
        message: 'Query parameter names array is not set',
      },
    });
  }

  let length: number = Number(req.query.names?.length) || 0;

  let countryList: ICountry[] = [];

  if (Array.isArray(req.query.names)) {
    for (var i = 0; i < length; i++) {
      let name = req.query.names[i];
      console.log('string value', name);
      try {
        /**
         * Get list of countries data
         * By using names array
         * @fields name,flags,population,currencies,capital,languages
         */
        let result = await axiosCountries.get('name/' + name, {
          params: {
            fields: 'name,flags,population,currencies,capital,languages',
          },
        });

        // get countries data from result data array
        for (var j = 0; j < result.data.length; j++) {
          countryList.push(result.data[j]);
        }
      } catch (exception) {
        let error = JSON.parse(JSON.stringify(exception));

        // send responce
        res.status(error.status).json({
          code: error.status,
          status: 'error',
          error: {
            code: error.code,
            message: error.message,
          },
        });
      }
    }
    // send responce
    res.status(200).json({
      code: 200,
      status: 'success',
      payload: countryList,
    });
  }
};
