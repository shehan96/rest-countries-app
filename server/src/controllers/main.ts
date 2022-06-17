import { Request, Response, NextFunction } from 'express';

export const main = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    code: 200,
    status: 'success',
    payload: 'data goes here',
  });
};
