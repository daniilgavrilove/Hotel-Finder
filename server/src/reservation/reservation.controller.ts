import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Listing } from 'listing/entities/listing.entity';
import { Reservation } from 'reservation/entities/reservation.entity';

@Controller('api/reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.create(createReservationDto);
  }

  @ApiOperation({ summary: 'Get reservations' })
  @ApiResponse({ status: 200, type: [Reservation] })
  @ApiQuery({
    name: 'userId',
    required: false,
    description: 'ID User',
  })
  @ApiQuery({
    name: 'listingId',
    required: false,
    description: 'ID Listing',
  })
  @ApiQuery({
    name: 'authorId',
    required: false,
    description: 'ID author',
  })
  @Get()
  findAll(
    @Query() query: { userId: number; listingId: number; authorId: number },
  ) {
    return this.reservationService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationService.remove(+id);
  }
}
