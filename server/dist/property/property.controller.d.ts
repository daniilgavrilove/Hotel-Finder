import { PropertyService } from './property.service';
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertyService);
    getUserProperty(propertyId: number): Promise<import("./entities/property.entity").Property>;
}
