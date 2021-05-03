import { Resolver, Mutation, Args, Query, Int } from "@nestjs/graphql";
import { PlanetaService } from "./planeta.service";
import { Planeta } from "./entidades/planeta.entity";
import { CrearPlanetaInput } from "./dto/crearPlaneta.input";

@Resolver()
export class PlanetaResolver {
	constructor(private readonly planetaService: PlanetaService) {}

	@Query(() => String)
	saludo() {
		return "Hola Zoluxiones!";
	}

	@Mutation(() => Planeta)
	crearPlaneta(
		@Args("crearPlanetaInput") crearPlanetaInput: CrearPlanetaInput
	) {
		return this.planetaService.crearPlaneta(
			crearPlanetaInput.nombre,
			crearPlanetaInput.clima,
			crearPlanetaInput.diametro,
			crearPlanetaInput.gravedad,
			crearPlanetaInput.periodoDeTraslacion,
			crearPlanetaInput.periodoDeRotacion,
			crearPlanetaInput.poblacion,
			crearPlanetaInput.tipoDeTerreno,
			crearPlanetaInput.enActividad
		);
	}

	@Query(() => [Planeta], {
		description: "Obtiene todos los Planetas creados Activos"
	})
	obtenerPlanetasCreados() {
		return this.planetaService.obtenerPlanetasCreados();
	}

	@Query(() => String, {
		description: "Obtiene los nombres de cada uno de los 61 Planetas de Star Wars"
	})
	obtenerNombrePlaneta(@Args("planetaId", { type: () => Int }) planetaId: number) {
		return this.planetaService.obtenerPlaneta(planetaId);
	}
}
