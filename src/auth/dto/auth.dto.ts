import { IsString,IsNotEmpty } from "class-validator";

export class AuthDto {
    @IsString()
    @IsNotEmpty()
    login:string
    @IsNotEmpty()
    @IsString()
    password:string
}