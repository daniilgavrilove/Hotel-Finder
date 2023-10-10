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
exports.ListingService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const listing_entity_1 = require("./entities/listing.entity");
const image_entity_1 = require("./entities/image.entity");
const files_service_1 = require("../files/files.service");
const generateSlug_1 = require("../lib/functions/generateSlug");
let ListingService = class ListingService {
    constructor(listingRepository, fileService) {
        this.listingRepository = listingRepository;
        this.fileService = fileService;
    }
    async create(createListingDto, images) {
        console.log(createListingDto);
        const { title, propertyId } = createListingDto;
        const slug = (0, generateSlug_1.generateSlug)(title);
        const fileNames = await this.fileService.createManyFiles(images, slug);
        const listing = await this.listingRepository.create(Object.assign(Object.assign({}, createListingDto), { slug,
            propertyId }));
        fileNames.map((fileName) => {
            image_entity_1.Image.create({
                imageSrc: fileName,
                listingId: listing.id,
            });
        });
        return listing;
    }
    async findAll(query) {
        try {
            let { page, limit, category, propertyId } = query;
            page = page || 1;
            limit = limit || 18;
            const offset = page * limit - limit;
            let listings;
            if (propertyId) {
                listings = await this.listingRepository.findAndCountAll({
                    where: { propertyId: propertyId },
                    limit,
                    offset,
                    include: { all: true },
                });
                return listings;
            }
            if (!category) {
                listings = await this.listingRepository.findAndCountAll({
                    limit,
                    offset,
                    include: { all: true },
                });
                return listings;
            }
            if (category) {
                listings = await this.listingRepository.findAndCountAll({
                    where: { category },
                    limit,
                    offset,
                    include: { all: true },
                });
                return listings;
            }
        }
        catch (e) {
            throw new common_1.HttpException('Listings not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    async findOne(slug) {
        return await this.listingRepository.findOne({
            where: { slug: slug },
            include: { all: true },
        });
    }
    async update(slug, updateListingDto) {
        return await this.listingRepository.update(Object.assign({}, updateListingDto), { where: { slug } });
    }
    async remove(id) {
        return await this.listingRepository.destroy({
            where: { id },
            cascade: true,
            truncate: false,
        });
    }
};
ListingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(listing_entity_1.Listing)),
    __metadata("design:paramtypes", [Object, files_service_1.FilesService])
], ListingService);
exports.ListingService = ListingService;
//# sourceMappingURL=listing.service.js.map