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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const role_service_1 = require("../role/role.service");
const user_entity_1 = require("./entities/user.entity");
const favorite_service_1 = require("../favorite/favorite.service");
const property_service_1 = require("../property/property.service");
let UserService = class UserService {
    constructor(userRepository, roleService, favoriteService, propertyService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
        this.favoriteService = favoriteService;
        this.propertyService = propertyService;
    }
    async createUser(dto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('ADMIN');
        const favorite = await this.favoriteService.createOneFavorite(user.id);
        const property = await this.propertyService.createUserProperty(user.id);
        await user.$set('roles', [role.id]);
        await user.$set('favorite', [favorite.id]);
        await user.$set('property', [property.id]);
        user.roles = [role];
        user.favorite = favorite;
        user.property = property;
        return user;
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } });
        return users;
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            include: { all: true },
        });
        return user;
    }
    async addRole(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new common_1.HttpException('Пользователь или роль не найдены', common_1.HttpStatus.NOT_FOUND);
    }
    async getUserByRefreshToken(refreshToken) {
        const user = await this.userRepository.findOne({
            where: { refreshToken: refreshToken },
            include: { all: true },
        });
        if (!user) {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_entity_1.User)),
    __metadata("design:paramtypes", [Object, role_service_1.RoleService,
        favorite_service_1.FavoriteService,
        property_service_1.PropertyService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map