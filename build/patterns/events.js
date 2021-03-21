"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
var Events;
(function (Events) {
    Events["TicketCreated"] = "ticket:created";
    Events["TicketUpdated"] = "ticket:updated";
    Events["OrderCreated"] = "order:created";
    Events["OrderCancelled"] = "order:cancelled";
    Events["ExpirationComplete"] = "expiration:complete";
    Events["PaymentCreated"] = "payment:created";
    Events["StaffCreated"] = "staff:created";
    Events["DriverCreated"] = "driver:created";
})(Events = exports.Events || (exports.Events = {}));
