import { axiosCountry } from '../axios/axiosCountry';
import { IResult } from '../types/result.types';

export const getCountries = async (): Promise<IResult> => {
  let result = await axiosCountry.get('all');
  return result.data;
};
