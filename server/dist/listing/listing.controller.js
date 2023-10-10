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
exports.ListingController = void 0;
const common_1 = require("@nestjs/common");
const listing_service_1 = require("./listing.service");
const create_listing_dto_1 = require("./dto/create-listing.dto");
const update_listing_dto_1 = require("./dto/update-listing.dto");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const listing_entity_1 = require("./entities/listing.entity");
let ListingController = class ListingController {
    constructor(listingService) {
        this.listingService = listingService;
    }
    create(createListingDto, images) {
        return this.listingService.create(createListingDto, images);
    }
    findAll(query) {
        return this.listingService.findAll(query);
    }
    findOne(slug) {
        return this.listingService.findOne(slug);
    }
    update(slug, updateListingDto) {
        return this.listingService.update(slug, updateListingDto);
    }
    remove(id) {
        return this.listingService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_listing_dto_1.CreateListingDto,
        Array]),
    __metadata("design:returntype", void 0)
], ListingController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get listings' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [listing_entity_1.Listing] }),
    (0, swagger_1.ApiQuery)({
        name: 'category',
        required: false,
        description: 'Идентификатор категории',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        description: 'Максимальное число товаров на странице',
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'Номер страницы' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ListingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ListingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_listing_dto_1.UpdateListingDto]),
    __metadata("design:returntype", void 0)
], ListingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ListingController.prototype, "remove", null);
ListingController = __decorate([
    (0, common_1.Controller)('api/listing'),
    __metadata("design:paramtypes", [listing_service_1.ListingService])
], ListingController);
exports.ListingController = ListingController;
//# sourceMappingURL=listing.controller.js.map