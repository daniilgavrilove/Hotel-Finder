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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const favorite_service_1 = require("./favorite.service");
const create_favorite_dto_1 = require("./dto/create-favorite.dto");
const favorite_entity_1 = require("./entities/favorite.entity");
let FavoriteController = class FavoriteController {
    constructor(favoriteService) {
        this.favoriteService = favoriteService;
    }
    addListingToFavorite(body) {
        return this.favoriteService.addListingToFavorite(body);
    }
    getUserFavorite(favoriteId) {
        return this.favoriteService.getUserFavorite(favoriteId);
    }
    deleteListingFromFavorite(body) {
        return this.favoriteService.deleteListingFromFavorite(body);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавление товара в избранное' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_favorite_dto_1.AddListingToFavorite]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "addListingToFavorite", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение избранного пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [favorite_entity_1.Favorite] }),
    (0, swagger_1.ApiParam)({
        name: 'favoriteId',
        required: true,
        description: 'ID корзины пользователя',
    }),
    (0, common_1.Get)(':favoriteId'),
    __param(0, (0, common_1.Param)('favoriteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "getUserFavorite", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление товара из избранного' }),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_favorite_dto_1.DeleteListingFromFavorite]),
    __metadata("design:returntype", void 0)
], FavoriteController.prototype, "deleteListingFromFavorite", null);
FavoriteController = __decorate([
    (0, swagger_1.ApiTags)('Избранное'),
    (0, common_1.Controller)('api/favorite'),
    __metadata("design:paramtypes", [favorite_service_1.FavoriteService])
], FavoriteController);
exports.FavoriteController = FavoriteController;
//# sourceMappingURL=favorite.controller.js.map