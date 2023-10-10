import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FavoriteService } from './favorite.service';
import {
  AddListingToFavorite,
  CreateFavoriteDto,
  DeleteListingFromFavorite,
} from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { Favorite } from 'favorite/entities/favorite.entity';

@ApiTags('Избранное')
@Controller('api/favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @ApiOperation({ summary: 'Добавление товара в избранное' })
  @Post()
  addListingToFavorite(@Body() body: AddListingToFavorite) {
    return this.favoriteService.addListingToFavorite(body);
  }

  @ApiOperation({ summary: 'Получение избранного пользователя' })
  @ApiResponse({ status: 200, type: [Favorite] })
  @ApiParam({
    name: 'favoriteId',
    required: true,
    description: 'ID корзины пользователя',
  })
  // @UseGuards(RolesGuard)
  // @Roles('USER')
  @Get(':favoriteId')
  getUserFavorite(@Param('favoriteId') favoriteId: number) {
    return this.favoriteService.getUserFavorite(favoriteId);
  }

  @ApiOperation({ summary: 'Удаление товара из избранного' })
  @Delete()
  deleteListingFromFavorite(@Body() body: DeleteListingFromFavorite) {
    return this.favoriteService.deleteListingFromFavorite(body);
  }
}
