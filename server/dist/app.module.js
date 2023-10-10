"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./user/user.module");
const account_module_1 = require("./account/account.module");
const listing_module_1 = require("./listing/listing.module");
const reservation_module_1 = require("./reservation/reservation.module");
const user_entity_1 = require("./user/entities/user.entity");
const role_module_1 = require("./role/role.module");
const role_entity_1 = require("./role/entities/role.entity");
const users_roles_entity_1 = require("./role/entities/users-roles.entity");
const auth_module_1 = require("./auth/auth.module");
const files_module_1 = require("./files/files.module");
const listing_entity_1 = require("./listing/entities/listing.entity");
const image_entity_1 = require("./listing/entities/image.entity");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const favorite_module_1 = require("./favorite/favorite.module");
const favorite_entity_1 = require("./favorite/entities/favorite.entity");
const reservation_entity_1 = require("./reservation/entities/reservation.entity");
const property_module_1 = require("./property/property.module");
const property_entity_1 = require("./property/entities/property.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USERNAME,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [
                    user_entity_1.User,
                    role_entity_1.Role,
                    users_roles_entity_1.UserRoles,
                    listing_entity_1.Listing,
                    image_entity_1.Image,
                    favorite_entity_1.Favorite,
                    reservation_entity_1.Reservation,
                    property_entity_1.Property,
                ],
                autoLoadModels: true,
                synchronize: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'static'),
            }),
            user_module_1.UserModule,
            account_module_1.AccountModule,
            listing_module_1.ListingModule,
            reservation_module_1.ReservationModule,
            role_module_1.RoleModule,
            auth_module_1.AuthModule,
            files_module_1.FilesModule,
            favorite_module_1.FavoriteModule,
            property_module_1.PropertyModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map