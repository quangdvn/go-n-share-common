"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequireAuthStaffGuard = void 0;
var common_1 = require("@nestjs/common");
var enum_1 = require("../constants/enum");
var RequireAuthStaffGuard = /** @class */ (function () {
    function RequireAuthStaffGuard() {
    }
    RequireAuthStaffGuard.prototype.canActivate = function (context) {
        var request = context.switchToHttp().getRequest();
        return validateRequest(request);
    };
    RequireAuthStaffGuard = __decorate([
        common_1.Injectable()
    ], RequireAuthStaffGuard);
    return RequireAuthStaffGuard;
}());
exports.RequireAuthStaffGuard = RequireAuthStaffGuard;
function validateRequest(request) {
    var _a;
    if (((_a = request.currentUser) === null || _a === void 0 ? void 0 : _a.auth) === enum_1.AuthRoles.STAFF) {
        return true;
    }
    throw new common_1.UnauthorizedException('Cần đăng nhập để dùng chức năng này');
}
