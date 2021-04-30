import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { PlanetaService } from "./planeta.service";
import { Planeta } from "./entidades/planeta.entity";
import { CrearPlanetaInput } from "./dto/crearPlaneta.input";

@Resolver()
export class PlanetaResolver {
	constructor(private readonly planetaService: PlanetaService) {}

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
}
