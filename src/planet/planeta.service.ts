import { Injectable } from "@nestjs/common";
import { Connection } from "typeorm";
import { Planeta } from "./entidades/planeta.entity";
import axios, { AxiosResponse } from 'axios';

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
	
	/**
	 * Obtener Planetas Creados.
	 *
	 * Devuelve toda la lista de Planetas creados Activos.
	 *
	 * @returns Arreglo Planeta.
	 */
	 obtenerPlanetasCreados(): Promise<Planeta[]> {
		const repositorioPlanetas = this.connection.getRepository(Planeta);
		return repositorioPlanetas.find({ where: { enActividad: true } });
	}

	/**
	 * Obtener Planetas.
	 *
	 * Devuelve los nombres de cada uno de los 61 planetas de Star Wars.
	 *
	 * @param planetaId ID del Planeta de Star Wars. Disponibles del 1 al 61.
	 * @returns Planetas Star Wars.
	 */
	async obtenerPlaneta(planetaId: number): Promise<AxiosResponse<string>> {
		try {
			const { data } = await axios.get(`https://swapi.py4e.com/api/planets/${planetaId}`);
    		return data.name;
		} catch (e) {
			throw e;
		}
	}
}
