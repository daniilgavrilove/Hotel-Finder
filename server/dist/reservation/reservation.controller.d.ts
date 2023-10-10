import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from 'reservation/entities/reservation.entity';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    create(createReservationDto: CreateReservationDto): Promise<Reservation>;
    findAll(query: {
        userId: number;
        listingId: number;
        authorId: number;
    }): Promise<any>;
    findOne(id: string): Promise<Reservation>;
    update(id: string, updateReservationDto: UpdateReservationDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
