import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateFavoriteDto {}

export class AddListingToFavorite {
  @ApiProperty({ example: '134', description: 'Айди товара' })
  readonly listingSlug: string;

  @ApiProperty({ example: '23', description: 'Айди избранного' })
  readonly favoriteId: number;
}

export class DeleteListingFromFavorite extends PartialType(
  AddListingToFavorite,
) {}
