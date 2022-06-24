import { ICountry } from './country.types';
import { ITodo } from './todo.types';

export interface IError {
  code: number;
  message: string;
}

export interface IResult {
  code: number;
  status: string;
  payload: ICountry[];
  error?: IError;
}
