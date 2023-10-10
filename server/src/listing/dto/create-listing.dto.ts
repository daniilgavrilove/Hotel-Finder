import { Image } from 'listing/entities/image.entity';

export class CreateListingDto {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly roomCount: number;
  readonly bathroomCount: number;
  readonly guestCount: number;
  readonly locationValue: string;
  readonly price: number;
  readonly images: Image[];
  readonly propertyId: number;
}
