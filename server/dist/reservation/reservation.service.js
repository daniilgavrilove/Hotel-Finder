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
exports.ReservationService = void 0;
const common_1 = require("@nestjs/common");
const reservation_entity_1 = require("./entities/reservation.entity");
const sequelize_1 = require("@nestjs/sequelize");
const image_entity_1 = require("../listing/entities/image.entity");
const listing_entity_1 = require("../listing/entities/listing.entity");
const property_entity_1 = require("../property/entities/property.entity");
let ReservationService = class ReservationService {
    constructor(reservationRepository) {
        this.reservationRepository = reservationRepository;
    }
    async create(createReservationDto) {
        const reservation = await this.reservationRepository.create(createReservationDto);
        return reservation;
    }
    async findAll(query) {
        const { userId, listingId, authorId } = query;
        console.log(query);
        let reservations;
        if (userId) {
            reservations = await this.reservationRepository.findAll({
                where: { userId: userId },
                include: [{ model: listing_entity_1.Listing, include: [{ model: image_entity_1.Image }] }],
            });
            return reservations;
        }
        if (listingId) {
            reservations = await this.reservationRepository.findAll({
                where: { listingId },
                include: [{ model: listing_entity_1.Listing, include: [{ model: image_entity_1.Image }] }],
            });
            return reservations;
        }
        if (authorId) {
            reservations = await this.reservationRepository.findAll({
                include: {
                    model: listing_entity_1.Listing,
                    required: true,
                    include: [
                        { model: image_entity_1.Image },
                        { model: property_entity_1.Property, where: { userId: authorId } },
                    ],
                },
            });
            return reservations;
        }
        else {
            reservations = await this.reservationRepository.findAll({
                include: { all: true, include: [{ all: true }] },
            });
            return reservations;
        }
    }
    async findOne(id) {
        return await this.reservationRepository.findOne({ where: { id } });
    }
    async update(id, updateReservationDto) {
        return await this.reservationRepository.update(Object.assign({}, updateReservationDto), { where: { id } });
    }
    async remove(id) {
        return await this.reservationRepository.destroy({ where: { id } });
    }
};
ReservationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(reservation_entity_1.Reservation)),
    __metadata("design:paramtypes", [Object])
], ReservationService);
exports.ReservationService = ReservationService;
//# sourceMappingURL=reservation.service.js.map