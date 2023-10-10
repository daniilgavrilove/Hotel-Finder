import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Property } from 'property/entities/property.entity';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService],
  imports: [SequelizeModule.forFeature([Property])],
  exports: [PropertyService],
})
export class PropertyModule {}
