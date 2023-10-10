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
exports.ReservationsListings = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const reservation_entity_1 = require("./reservation.entity");
const listing_entity_1 = require("../../listing/entities/listing.entity");
let ReservationsListings = class ReservationsListings extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], ReservationsListings.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => reservation_entity_1.Reservation),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ReservationsListings.prototype, "reservationId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => listing_entity_1.Listing),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ReservationsListings.prototype, "listingId", void 0);
ReservationsListings = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'reservations_listings',
        createdAt: false,
        updatedAt: false,
    })
], ReservationsListings);
exports.ReservationsListings = ReservationsListings;
//# sourceMappingURL=reservations-listings.entity.js.map