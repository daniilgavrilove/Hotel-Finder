import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Controller('api/property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get(':propertyId')
  getUserProperty(@Param('propertyId') propertyId: number) {
    return this.propertyService.getUserProperty(propertyId);
  }
}
