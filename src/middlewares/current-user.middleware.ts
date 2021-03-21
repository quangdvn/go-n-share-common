import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import { IRequest } from '../constants/custom-request';
import { JwtPayload } from '../constants/payload';

export function CurrentUserMiddleware(
  req: IRequest,
  res: Response,
  next: NextFunction
) {
  if (!req.session.token) {
    return next();
  }
  try {
    const payload = jwt.verify(req.session.token, 'quangdvn') as JwtPayload;
    req.currentUser = payload;
    next();
  } catch (err) {
    next();
  }
}
