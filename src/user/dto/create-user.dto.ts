import { IsEmail, IsNotEmpty, MaxLength, MinLength} from 'class-validator';

export class CreateUserDto {
  @IsEmail({},{
    message:'Formato de email no'})
  email: string;
  @MinLength(10,{
    message: 'minimo de 10 caracteres'})
  @MaxLength(15,{
    message: 'maximo de 15 caracteres'})
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
}