import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayload } from '../constants/payload';

declare global {
  namespace Express {
    interface Request {
      currentUser?: JwtPayload;
    }
  }
}

export function CurrentUserMiddleware(
  req: Request,
  _: Response,
  next: NextFunction
) {
  const headerToken = req.header('Authorization')?.replace('Bearer ', '');
  console.log('1', headerToken);
  console.log('2', req.session?.token);
  if (!req.session?.token && !headerToken) {
    return next();
  }

  try {
    let payload = null;
    if (req.session?.token) {
      payload = jwt.verify(req.session.token, 'quangdvn') as JwtPayload;
    } else {
      payload = jwt.verify(headerToken!, 'quangdvn') as JwtPayload;
    }
    req.currentUser = payload;
    next();
  } catch (err) {
    console.log(err);
    next();
  }
  next();
}
