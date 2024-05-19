import { Request, Response, NextFunction } from 'express';

const validApiKey = '123456';

export const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey === validApiKey) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
