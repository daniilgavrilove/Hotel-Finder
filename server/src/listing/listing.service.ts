import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Listing } from 'listing/entities/listing.entity';
import { Image } from 'listing/entities/image.entity';
import { FilesService } from 'files/files.service';
import { generateSlug } from 'lib/functions/generateSlug';
import * as uuid from 'uuid';
import { Property } from 'property/entities/property.entity';
import { User } from 'user/entities/user.entity';

@Injectable()
export class ListingService {
  constructor(
    @InjectModel(Listing) private listingRepository: typeof Listing,
    // @InjectModel(Image) private imageRepository: typeof Image,
    private fileService: FilesService,
  ) {}

  async create(
    createListingDto: CreateListingDto,
    images: Array<Express.Multer.File>,
  ) {
    console.log(createListingDto);
    const { title, propertyId } = createListingDto;
    const slug = generateSlug(title);
    const fileNames = await this.fileService.createManyFiles(images, slug);

    const listing = await this.listingRepository.create({
      ...createListingDto,
      slug,
      propertyId,
    });

    fileNames.map((fileName) => {
      Image.create({
        imageSrc: fileName,
        listingId: listing.id,
      });
    });
    return listing;
  }

  async findAll(query) {
    try {
      // eslint-disable-next-line prefer-const
      let { page, limit, category, propertyId } = query;
      page = page || 1;
      limit = limit || 18;
      const offset = page * limit - limit;
      let listings;
      if (propertyId) {
        listings = await this.listingRepository.findAndCountAll({
          where: { propertyId: propertyId },
          limit,
          offset,
          include: { all: true },
        });
        return listings;
      }
      if (!category) {
        listings = await this.listingRepository.findAndCountAll({
          limit,
          offset,
          include: { all: true },
        });
        return listings;
      }
      if (category) {
        listings = await this.listingRepository.findAndCountAll({
          where: { category },
          limit,
          offset,
          include: { all: true },
        });
        return listings;
      }
    } catch (e) {
      throw new HttpException('Listings not found', HttpStatus.NOT_FOUND);
    }
  }

  async findOne(slug: string) {
    return await this.listingRepository.findOne({
      where: { slug: slug },
      include: { all: true },
    });
  }

  async update(slug: string, updateListingDto: UpdateListingDto) {
    return await this.listingRepository.update(
      { ...updateListingDto },
      { where: { slug } },
    );
  }

  async remove(id: number) {
    return await this.listingRepository.destroy({
      where: { id },
      cascade: true,
      truncate: false,
    });
  }
}
