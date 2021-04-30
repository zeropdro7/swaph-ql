import { InputType, Int, Field, Float } from "@nestjs/graphql";
import { IsNotEmpty, MaxLength } from "class-validator";

@InputType()
export class CrearPlanetaInput {
	@Field({ nullable: false })
    @IsNotEmpty()
	@MaxLength(50)
	nombre: string;

	@Field({ nullable: false })
    @IsNotEmpty()
	@MaxLength(20)
	clima: string;

	@Field(() => Float, { nullable: false })
    @IsNotEmpty()
	diametro: number;

	@Field(() => Float, { nullable: false })
    @IsNotEmpty()
	gravedad: number;

	@Field(() => Int, { nullable: false })
    @IsNotEmpty()
	periodoDeTraslacion: number;

	@Field(() => Int, { nullable: false })
    @IsNotEmpty()
	periodoDeRotacion: number;

	@Field(() => Int, { nullable: false })
    @IsNotEmpty()
	poblacion: number;

	@Field({ nullable: false })
    @IsNotEmpty()
	@MaxLength(20)
	tipoDeTerreno: string;

	@Field({ nullable: false })
    @IsNotEmpty()
	enActividad: boolean;
}
