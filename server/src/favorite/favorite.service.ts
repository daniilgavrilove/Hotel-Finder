import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  AddListingToFavorite,
  CreateFavoriteDto,
  DeleteListingFromFavorite,
} from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { Favorite } from 'favorite/entities/favorite.entity';
import { InjectModel } from '@nestjs/sequelize';
import { ListingService } from 'listing/listing.service';
import { Listing } from 'listing/entities/listing.entity';
import { Image } from 'listing/entities/image.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectModel(Favorite)
    private favoriteRepository: typeof Favorite,
    private listingService: ListingService,
  ) {}

  async createOneFavorite(userId: number): Promise<Favorite> {
    return await this.favoriteRepository.create({ userId });
  }

  async getUserFavorite(id): Promise<Favorite> {
    return await this.favoriteRepository.findOne({
      where: { id },
      include: [
        {
          model: Listing,
          include: [{ model: Image }],
        },
      ],
    });
  }

  async addListingToFavorite(body: AddListingToFavorite): Promise<Favorite> {
    const { favoriteId, listingSlug } = body;
    const favorite = await this.favoriteRepository.findOne({
      where: { id: favoriteId },
    });
    const listing = await this.listingService.findOne(listingSlug);
    if (!favorite) {
      throw new HttpException('Favorite is not found', HttpStatus.NOT_FOUND);
    }
    if (!listing) {
      throw new HttpException('Listing is not found', HttpStatus.NOT_FOUND);
    }
    if (favorite && listing) {
      await favorite.$add('listings', [listing.id]);
      return favorite;
    }
  }

  async deleteListingFromFavorite(body: DeleteListingFromFavorite) {
    const { favoriteId, listingSlug } = body;
    const favorite = await this.favoriteRepository.findOne({
      where: { id: favoriteId },
    });
    const listing = await this.listingService.findOne(listingSlug);
    if (!favorite) {
      throw new HttpException('Favorite is not found', HttpStatus.NOT_FOUND);
    }
    if (!listing) {
      throw new HttpException('Listing is not found', HttpStatus.NOT_FOUND);
    }
    if (favorite && listing) {
      await favorite.$remove('listings', [listing.id]);
      return favorite;
    }
  }
}
