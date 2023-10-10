import { Property } from 'property/entities/property.entity';
export declare class PropertyService {
    private propertyRepository;
    constructor(propertyRepository: typeof Property);
    getUserProperty(id: any): Promise<Property>;
    createUserProperty(userId: any): Promise<Property>;
}
