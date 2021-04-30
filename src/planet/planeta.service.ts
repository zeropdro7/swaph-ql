import { Injectable } from "@nestjs/common";
import { Connection } from "typeorm";
import { Planeta } from "./entidades/planeta.entity";

@Injectable()
export class PlanetaService {
	constructor(private readonly connection: Connection) {}

	/**
	 * Crear Planeta.
	 *
	 * Crea el Planeta con los datos que ingresa el cliente.
	 *
	 * @param nombre
	 * @param clima
	 * @param diametro
	 * @param gravedad
	 * @param periodoDeTraslacion
	 * @param periodoDeRotacion
	 * @param poblacion
	 * @param tipoDeTerreno
	 * @param enActividad
	 * @returns Planeta creado.
	 */
	 crearPlaneta(
		nombre: string,
		clima: string,
		diametro: number,
		gravedad: number,
		periodoDeTraslacion: number,
		periodoDeRotacion: number,
		poblacion: number,
		tipoDeTerreno: string,
		enActividad: boolean
	): Promise<Planeta> {
		return this.connection.transaction(async manager => {
			const repositorioPlanetas = manager.getRepository(Planeta);

			const planetaCreado = await repositorioPlanetas.save({
				nombre,
				clima,
				diametro,
				gravedad,
				periodoDeTraslacion,
				periodoDeRotacion,
				poblacion,
				tipoDeTerreno,
				enActividad
			});

			return planetaCreado;
		});
	}
}
