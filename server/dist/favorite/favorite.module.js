"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteModule = void 0;
const common_1 = require("@nestjs/common");
const favorite_service_1 = require("./favorite.service");
const favorite_controller_1 = require("./favorite.controller");
const favorite_entity_1 = require("./entities/favorite.entity");
const listing_module_1 = require("../listing/listing.module");
const sequelize_1 = require("@nestjs/sequelize");
const user_module_1 = require("../user/user.module");
let FavoriteModule = class FavoriteModule {
};
FavoriteModule = __decorate([
    (0, common_1.Module)({
        controllers: [favorite_controller_1.FavoriteController],
        providers: [favorite_service_1.FavoriteService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([favorite_entity_1.Favorite]),
            (0, common_1.forwardRef)(() => listing_module_1.ListingModule),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
        ],
        exports: [favorite_service_1.FavoriteService],
    })
], FavoriteModule);
exports.FavoriteModule = FavoriteModule;
//# sourceMappingURL=favorite.module.js.map