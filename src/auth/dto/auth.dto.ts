import { IsString,IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class AuthDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    login:string
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password:string
}