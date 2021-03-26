import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IRequest } from '../constants/custom-request';
import { JwtPayload } from '../constants/payload';

export function CurrentUserMiddleware(
  req: IRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.header('Authorization')?.replace('Bearer', '');
  if (!req.session.token || !token) {
    return next();
  }
  try {
    let payload = null;
    if (req.session.token) {
      payload = jwt.verify(req.session.token, 'quangdvn') as JwtPayload;
    } else {
      payload = jwt.verify(token, 'quangdvn') as JwtPayload;
    }
    req.currentUser = payload;
    next();
  } catch (err) {
    next();
  }
}
