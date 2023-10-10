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
exports.FavoriteService = void 0;
const common_1 = require("@nestjs/common");
const favorite_entity_1 = require("./entities/favorite.entity");
const sequelize_1 = require("@nestjs/sequelize");
const listing_service_1 = require("../listing/listing.service");
const listing_entity_1 = require("../listing/entities/listing.entity");
const image_entity_1 = require("../listing/entities/image.entity");
let FavoriteService = class FavoriteService {
    constructor(favoriteRepository, listingService) {
        this.favoriteRepository = favoriteRepository;
        this.listingService = listingService;
    }
    async createOneFavorite(userId) {
        return await this.favoriteRepository.create({ userId });
    }
    async getUserFavorite(id) {
        return await this.favoriteRepository.findOne({
            where: { id },
            include: [
                {
                    model: listing_entity_1.Listing,
                    include: [{ model: image_entity_1.Image }],
                },
            ],
        });
    }
    async addListingToFavorite(body) {
        const { favoriteId, listingSlug } = body;
        const favorite = await this.favoriteRepository.findOne({
            where: { id: favoriteId },
        });
        const listing = await this.listingService.findOne(listingSlug);
        if (!favorite) {
            throw new common_1.HttpException('Favorite is not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!listing) {
            throw new common_1.HttpException('Listing is not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (favorite && listing) {
            await favorite.$add('listings', [listing.id]);
            return favorite;
        }
    }
    async deleteListingFromFavorite(body) {
        const { favoriteId, listingSlug } = body;
        const favorite = await this.favoriteRepository.findOne({
            where: { id: favoriteId },
        });
        const listing = await this.listingService.findOne(listingSlug);
        if (!favorite) {
            throw new common_1.HttpException('Favorite is not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!listing) {
            throw new common_1.HttpException('Listing is not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (favorite && listing) {
            await favorite.$remove('listings', [listing.id]);
            return favorite;
        }
    }
};
FavoriteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(favorite_entity_1.Favorite)),
    __metadata("design:paramtypes", [Object, listing_service_1.ListingService])
], FavoriteService);
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=favorite.service.js.map