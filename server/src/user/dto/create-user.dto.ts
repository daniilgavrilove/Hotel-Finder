import {Column, DataType} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
   readonly id: number
   readonly name: string
   readonly email: string
   readonly password: string
   readonly emailVerified: boolean
   readonly image: string
   readonly activationLink: string

   @ApiProperty({example: 'jd7dh8hf.ccdcdcdtgrtc.fdtcgdch', description: 'Refresh'})
   readonly refreshToken: string

   @ApiProperty({example: 'jd7dh8hf.ccdcdcdtgrtc.4jfio4jf9fj', description: 'Access'})
   readonly accessToken: string

}
