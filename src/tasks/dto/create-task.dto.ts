import { MaxLength, MinLength } from "class-validator";

export class CreateTaskDto {
    @MaxLength(40,
        { message: 'Descripción debe tener máximo 40 caracteres' })
    @MinLength(5,
        { message: 'Descripción debe tener mínimo 5 caracteres' })
    description: string;
}
