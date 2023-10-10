"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyModule = void 0;
const common_1 = require("@nestjs/common");
const property_service_1 = require("./property.service");
const property_controller_1 = require("./property.controller");
const sequelize_1 = require("@nestjs/sequelize");
const property_entity_1 = require("./entities/property.entity");
let PropertyModule = class PropertyModule {
};
PropertyModule = __decorate([
    (0, common_1.Module)({
        controllers: [property_controller_1.PropertyController],
        providers: [property_service_1.PropertyService],
        imports: [sequelize_1.SequelizeModule.forFeature([property_entity_1.Property])],
        exports: [property_service_1.PropertyService],
    })
], PropertyModule);
exports.PropertyModule = PropertyModule;
//# sourceMappingURL=property.module.js.map