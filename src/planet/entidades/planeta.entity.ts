import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("planetas")
export class Planeta {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field({ nullable: false })
	@Column({ nullable: false })
	nombre: string;

	@Field({ nullable: false })
	@Column({ nullable: false })
	clima: string;

	@Field(() => Float, { nullable: false })
	@Column({ nullable: false })
	diametro: number;

	@Field(() => Float, { nullable: false })
	@Column({ nullable: false })
	gravedad: number;

	@Field(() => Int, { nullable: false })
	@Column({ nullable: false })
	periodoDeTraslacion: number;

	@Field(() => Int, { nullable: false })
	@Column({ nullable: false })
	periodoDeRotacion: number;

	@Field(() => Int, { nullable: false })
	@Column({ nullable: false })
	poblacion: number;

	@Field({ nullable: false })
	@Column({ nullable: false })
	tipoDeTerreno: string;

	@Field({ nullable: false })
	@Column({ nullable: false })
	enActividad: boolean;
}
