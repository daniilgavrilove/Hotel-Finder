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
exports.Image = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const listing_entity_1 = require("./listing.entity");
let Image = class Image extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Image.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Худи', description: 'Путь к картинке' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Image.prototype, "imageSrc", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => listing_entity_1.Listing, { onDelete: 'CASCADE' }),
    __metadata("design:type", listing_entity_1.Listing)
], Image.prototype, "listing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Идентификатор категории' }),
    (0, sequelize_typescript_1.ForeignKey)(() => listing_entity_1.Listing),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Image.prototype, "listingId", void 0);
Image = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'image', updatedAt: false, createdAt: false })
], Image);
exports.Image = Image;
//# sourceMappingURL=image.entity.js.map