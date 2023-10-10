import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from 'reservation/entities/reservation.entity';
export declare class ReservationService {
    private reservationRepository;
    constructor(reservationRepository: typeof Reservation);
    create(createReservationDto: CreateReservationDto): Promise<Reservation>;
    findAll(query: {
        userId: number;
        listingId: number;
        authorId: number;
    }): Promise<any>;
    findOne(id: number): Promise<Reservation>;
    update(id: number, updateReservationDto: UpdateReservationDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
