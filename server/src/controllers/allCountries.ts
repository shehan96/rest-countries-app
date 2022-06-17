import { Request, Response, NextFunction } from 'express';
import { axiosCountries } from '../axios/axiosCountries';

/**
 * Get all countries data
 * @param req
 * @param res
 * @param next
 */
export const allCountries = async (req: Request, res: Response, next: NextFunction) => {
  try {
    /**
     * Get all countries data
     * @fields name,flags,population,currencies,capital,languages
     */
    let result = await axiosCountries.get('all', {
      params: {
        fullText: true,
        fields: 'name,flags,population,currencies,capital,languages',
      },
    });

    // send responce
    res.status(200).json({
      code: 200,
      status: 'success',
      payload: result.data,
    });
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
};
