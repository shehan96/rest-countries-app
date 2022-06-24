import { useQuery, UseQueryResult } from 'react-query';
import { getCountries } from '../api/getCountries';
import { IResult } from '../types/result.types';

export const useGetCountries = (): UseQueryResult<IResult> => {
  return useQuery<IResult>('countries', getCountries);
};
