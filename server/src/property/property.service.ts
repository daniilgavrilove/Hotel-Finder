import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from 'property/entities/property.entity';
import { Listing } from 'listing/entities/listing.entity';
import { Image } from 'listing/entities/image.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property)
    private propertyRepository: typeof Property,
  ) {}

  async getUserProperty(id): Promise<Property> {
    return await this.propertyRepository.findOne({
      where: { id },
      include: [
        {
          model: Listing,
          include: [{ model: Image }],
        },
      ],
    });
  }

  async createUserProperty(userId): Promise<Property> {
    return await this.propertyRepository.create({ userId });
  }
}
