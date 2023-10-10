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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(userDto) {
        const user = await this.validateUser(userDto);
        const { refreshToken, accessToken } = await this.generateToken(user);
        user.accessToken = accessToken;
        user.refreshToken = refreshToken;
        await user.save();
        return user;
    }
    async registration(userDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new common_1.HttpException('Пользователь с таким email существует', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const activationLink = uuid.v4();
        const user = await this.userService.createUser(Object.assign(Object.assign({}, userDto), { password: hashPassword, activationLink }));
        const tokens = await this.generateToken(user);
        user.refreshToken = tokens.refreshToken;
        user.accessToken = tokens.accessToken;
        await user.save();
        return user;
    }
    async logout(refreshToken) {
        const user = await this.userService.getUserByRefreshToken(refreshToken);
        user.refreshToken = '';
        return await user.save();
        if (!user) {
            throw new common_1.HttpException('Удаление не получилось', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async refresh(refreshToken) {
        if (!refreshToken) {
            throw new common_1.HttpException('Нет токена', common_1.HttpStatus.UNAUTHORIZED);
        }
        const userData = await this.validateToken(refreshToken);
        const tokenFromDb = await this.userService.getUserByRefreshToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw new common_1.HttpException('Пользователь не авторизован', common_1.HttpStatus.UNAUTHORIZED);
        }
        const user = await this.userService.getUserByEmail(userData.email);
        const tokens = await this.generateToken(user);
        user.refreshToken = tokens.refreshToken;
        await user.save();
        user.accessToken = tokens.accessToken;
        await user.save();
        return user;
    }
    validateToken(token) {
        try {
            const userData = this.jwtService.verify(token, {
                secret: process.env.JWT_ACCESS_SECRET,
            });
            return userData;
        }
        catch (e) {
            return null;
        }
    }
    async generateToken(user) {
        const payload = { email: user.email, id: user.id, roles: user.roles };
        const accessToken = this.jwtService.sign(payload, {
            expiresIn: '24 h',
            secret: process.env.JWT_ACCESS_SECRET,
        });
        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: '30 d',
            secret: process.env.JWT_ACCESS_SECRET,
        });
        return { refreshToken, accessToken };
    }
    async validateUser(userDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException({
                message: 'Пользователь с таким email не существует',
            });
        }
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (!passwordEquals) {
            throw new common_1.UnauthorizedException({ message: 'Неккоректный пароль' });
        }
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map