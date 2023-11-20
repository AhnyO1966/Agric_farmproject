import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class agric_farmDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    kgpacks: number;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}