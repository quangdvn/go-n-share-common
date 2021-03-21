import { Request } from 'express';
import { JwtPayload } from './payload';
export interface IRequest extends Request {
    currentUser: JwtPayload;
}
//# sourceMappingURL=custom-request.d.ts.map