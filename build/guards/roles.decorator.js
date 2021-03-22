"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
var common_1 = require("@nestjs/common");
var Roles = function (role) { return common_1.SetMetadata('role', role); };
exports.Roles = Roles;
