import { IsString,IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class AuthDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    email:string
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password:string
}