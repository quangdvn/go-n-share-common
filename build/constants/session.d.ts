import session from 'express-session';
export = session;
declare module 'express-session' {
    interface SessionData {
        token: string;
    }
}
//# sourceMappingURL=session.d.ts.map