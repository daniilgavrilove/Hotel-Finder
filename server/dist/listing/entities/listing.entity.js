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
exports.Listing = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const image_entity_1 = require("./image.entity");
const favorite_entity_1 = require("../../favorite/entities/favorite.entity");
const reservation_entity_1 = require("../../reservation/entities/reservation.entity");
const property_entity_1 = require("../../property/entities/property.entity");
let Listing = class Listing extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'ID' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Listing.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hotel', description: 'Listings title' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Listing.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hotel', description: 'Listings description' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Listing.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hotel', description: 'Listings category' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Listing.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 000', description: 'Room count' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Listing.prototype, "roomCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 000', description: 'Bathroom count' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Listing.prototype, "bathroomCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 000', description: 'Guest count' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Listing.prototype, "guestCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hotel', description: 'Location category' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Listing.prototype, "locationValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'hudi',
        description: 'Слаг. Используется для пути товара и названия папки с картинками',
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: true }),
    __metadata("design:type", String)
], Listing.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2 000', description: 'Цена товара' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Listing.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => image_entity_1.Image, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Listing.prototype, "images", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => favorite_entity_1.Favorite),
    __metadata("design:type", favorite_entity_1.Favorite)
], Listing.prototype, "favorite", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Идентификатор избранного' }),
    (0, sequelize_typescript_1.ForeignKey)(() => favorite_entity_1.Favorite),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Listing.prototype, "favoriteId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => property_entity_1.Property),
    __metadata("design:type", property_entity_1.Property)
], Listing.prototype, "property", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Идентификатор избранного' }),
    (0, sequelize_typescript_1.ForeignKey)(() => property_entity_1.Property),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Listing.prototype, "propertyId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => reservation_entity_1.Reservation),
    __metadata("design:type", Array)
], Listing.prototype, "reservations", void 0);
Listing = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'listing' })
], Listing);
exports.Listing = Listing;
//# sourceMappingURL=listing.entity.js.map