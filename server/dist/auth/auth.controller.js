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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../user/entities/user.entity");
const create_user_dto_1 = require("../user/dto/create-user.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(userDto, response) {
        const user = await this.authService.login(userDto);
        response.cookie('refreshToken', user.refreshToken, {
            maxAge: 2592000000,
            httpOnly: true,
            secure: false,
        });
        return user;
    }
    async registration(userDto, response) {
        const user = await this.authService.registration(userDto);
        response.cookie('refreshToken', user.refreshToken, {
            maxAge: 2592000000,
            httpOnly: true,
            secure: false,
        });
        return user;
    }
    async logout(request, response) {
        const { refreshToken } = request.cookies;
        const token = await this.authService.logout(refreshToken);
        response.clearCookie('refreshToken', {
            maxAge: 2592000000,
            httpOnly: true,
            secure: false,
        });
        return request.cookies['refreshToken'];
    }
    async refresh(request, response, userDto) {
        const { refreshToken } = request.cookies;
        const user = await this.authService.refresh(refreshToken);
        response.cookie('refreshToken', user.refreshToken, {
            maxAge: 2592000000,
            httpOnly: true,
            secure: false,
        });
        return user;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Логин' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_entity_1.User }),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Регистрация' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_entity_1.User }),
    (0, common_1.Post)('/registration'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registration", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Логаут' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_entity_1.User }),
    (0, common_1.Post)('/logout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновление токена' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_entity_1.User }),
    (0, common_1.Get)('/refresh'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Регистрация'),
    (0, common_1.Controller)('api/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map