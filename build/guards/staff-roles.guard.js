"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffRolesGuard = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var StaffRolesGuard = /** @class */ (function () {
    function StaffRolesGuard(reflector) {
        this.reflector = reflector;
    }
    StaffRolesGuard.prototype.canActivate = function (context) {
        var role = this.reflector.get('role', context.getHandler());
        if (!role) {
            return true;
        }
        var request = context.switchToHttp().getRequest();
        var curUser = request.currentUser;
        return matchRoles(role, curUser === null || curUser === void 0 ? void 0 : curUser.data.role);
    };
    StaffRolesGuard = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Reflector])
    ], StaffRolesGuard);
    return StaffRolesGuard;
}());
exports.StaffRolesGuard = StaffRolesGuard;
function matchRoles(pathRole, curRole) {
    if (pathRole === curRole)
        return true;
    throw new common_1.ForbiddenException('Tài khoản không được phép thực hiện chức năng này');
}
