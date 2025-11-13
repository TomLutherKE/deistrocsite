import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateOrderDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    
    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly city: string;
    
    @IsString()
    @IsNotEmpty()
    readonly supplier: string;

    @IsString()
    @IsNotEmpty()
    readonly category: string;

    @IsString()
    @IsNotEmpty()
    readonly deliveryMethod: string;

    @IsString()
    @IsNotEmpty()
    readonly paymentMethod: string;

    @IsString()
    @IsNotEmpty()
    readonly deliveryPriority: string;
}