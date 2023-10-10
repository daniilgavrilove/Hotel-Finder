"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingModule = void 0;
const common_1 = require("@nestjs/common");
const listing_service_1 = require("./listing.service");
const listing_controller_1 = require("./listing.controller");
const sequelize_1 = require("@nestjs/sequelize");
const image_entity_1 = require("./entities/image.entity");
const listing_entity_1 = require("./entities/listing.entity");
const files_module_1 = require("../files/files.module");
let ListingModule = class ListingModule {
};
ListingModule = __decorate([
    (0, common_1.Module)({
        controllers: [listing_controller_1.ListingController],
        providers: [listing_service_1.ListingService],
        imports: [sequelize_1.SequelizeModule.forFeature([image_entity_1.Image, listing_entity_1.Listing]), files_module_1.FilesModule],
        exports: [listing_service_1.ListingService],
    })
], ListingModule);
exports.ListingModule = ListingModule;
//# sourceMappingURL=listing.module.js.map