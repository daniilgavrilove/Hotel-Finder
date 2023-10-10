import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Query,
} from '@nestjs/common';
import { ListingService } from './listing.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Listing } from 'listing/entities/listing.entity';

@Controller('api/listing')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images'))
  create(
    @Body() createListingDto: CreateListingDto,
    @UploadedFiles() images: Array<Express.Multer.File>,
  ) {
    return this.listingService.create(createListingDto, images);
  }

  @ApiOperation({ summary: 'Get listings' })
  @ApiResponse({ status: 200, type: [Listing] })
  @ApiQuery({
    name: 'category',
    required: false,
    description: 'Идентификатор категории',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Максимальное число товаров на странице',
  })
  @ApiQuery({ name: 'page', required: false, description: 'Номер страницы' })
  @Get()
  findAll(
    @Query()
    query: {
      category: string;
      limit: number;
      page: number;
      propertyId: number;
    },
  ) {
    return this.listingService.findAll(query);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.listingService.findOne(slug);
  }

  @Patch(':slug')
  update(
    @Param('slug') slug: string,
    @Body() updateListingDto: UpdateListingDto,
  ) {
    return this.listingService.update(slug, updateListingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.listingService.remove(id);
  }
}
