"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoles = exports.DriverRoles = exports.StaffRoles = exports.WorkingStatus = void 0;
var WorkingStatus;
(function (WorkingStatus) {
    WorkingStatus["WORKING"] = "working";
    WorkingStatus["RESIGN"] = "resign";
})(WorkingStatus = exports.WorkingStatus || (exports.WorkingStatus = {}));
var StaffRoles;
(function (StaffRoles) {
    StaffRoles["SUPERVISING"] = "supervising";
    StaffRoles["SCHEDULING"] = "scheduling";
    StaffRoles["TRACKING"] = "tracking";
})(StaffRoles = exports.StaffRoles || (exports.StaffRoles = {}));
var DriverRoles;
(function (DriverRoles) {
    DriverRoles["FIXED_TRIP"] = "fixedTrip";
    DriverRoles["TRANSIT_TRIP"] = "transitTrip";
})(DriverRoles = exports.DriverRoles || (exports.DriverRoles = {}));
var AuthRoles;
(function (AuthRoles) {
    AuthRoles["STAFF"] = "staff";
    AuthRoles["DRIVER"] = "driver";
})(AuthRoles = exports.AuthRoles || (exports.AuthRoles = {}));
