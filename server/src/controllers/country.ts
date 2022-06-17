import { Request, Response, NextFunction } from 'express';
import { axiosCountries } from '../axios/axiosCountries';

/**
 * Get unique country data
 * Based on country name set in the fullname query parameter
 * @param req
 * @param res
 * @param next
 */
export const country = async (req: Request, res: Response, next: NextFunction) => {
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
   * Check query parameter fullname is set
   */
  if (!('fullname' in req.query)) {
    res.status(404).json({
      code: 404,
      status: 'error',
      error: {
        code: 'NOT FOUND',
        message: 'Query parameter fullname is not set',
      },
    });
  }

  try {
    /**
     * Get unique country data
     * By using full country name
     * @fullText true,
     * @fields name,flags,population,currencies,capital,languages
     */
    let result = await axiosCountries.get('name/' + req.query.fullname, {
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
