"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUserMiddleware = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function CurrentUserMiddleware(req, res, next) {
    if (!req.session.token) {
        return next();
    }
    try {
        var payload = jsonwebtoken_1.default.verify(req.session.token, 'quangdvn');
        req.currentUser = payload;
        next();
    }
    catch (err) {
        next();
    }
}
exports.CurrentUserMiddleware = CurrentUserMiddleware;
