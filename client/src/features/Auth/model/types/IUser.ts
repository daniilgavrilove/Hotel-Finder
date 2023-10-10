export interface IUser{
    id :number
    name :string
    email :string
    password :string
    emailVerified :boolean
    image :string
    activationLink: string
    refreshToken: string
    accessToken: string
    property: {
        id: number
        userId: number
    }
    favorite: {
        id: number
        userId: number
    }
    createdAt:     Date;
    updatedAt:     Date;
}
