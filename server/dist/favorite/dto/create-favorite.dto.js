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
exports.DeleteListingFromFavorite = exports.AddListingToFavorite = exports.CreateFavoriteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateFavoriteDto {
}
exports.CreateFavoriteDto = CreateFavoriteDto;
class AddListingToFavorite {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '134', description: 'Айди товара' }),
    __metadata("design:type", String)
], AddListingToFavorite.prototype, "listingSlug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '23', description: 'Айди избранного' }),
    __metadata("design:type", Number)
], AddListingToFavorite.prototype, "favoriteId", void 0);
exports.AddListingToFavorite = AddListingToFavorite;
class DeleteListingFromFavorite extends (0, swagger_1.PartialType)(AddListingToFavorite) {
}
exports.DeleteListingFromFavorite = DeleteListingFromFavorite;
//# sourceMappingURL=create-favorite.dto.js.map