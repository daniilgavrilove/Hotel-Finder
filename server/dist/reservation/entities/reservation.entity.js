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
exports.Reservation = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../user/entities/user.entity");
const listing_entity_1 = require("../../listing/entities/listing.entity");
let Reservation = class Reservation extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Reservation.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11.02.23', description: 'Start date' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Reservation.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 000', description: 'End date' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Reservation.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 000', description: 'Bathroom count' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Reservation.prototype, "adultsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 000', description: 'Guest count' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Reservation.prototype, "childrenCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 000', description: 'Guest count' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Reservation.prototype, "infantsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 000', description: 'Цена товара' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Reservation.prototype, "totalPrice", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Reservation.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Идентификатор пользователя' }),
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Reservation.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => listing_entity_1.Listing),
    __metadata("design:type", listing_entity_1.Listing)
], Reservation.prototype, "listing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Идентификатор категории' }),
    (0, sequelize_typescript_1.ForeignKey)(() => listing_entity_1.Listing),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Reservation.prototype, "listingId", void 0);
Reservation = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'reservation' })
], Reservation);
exports.Reservation = Reservation;
//# sourceMappingURL=reservation.entity.js.map