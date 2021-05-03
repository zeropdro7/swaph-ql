import { Test, TestingModule } from "@nestjs/testing";
import { Connection } from "typeorm";
import { PlanetaService } from "./planeta.service";

describe("PlanetaService", () => {
	let planetaService: PlanetaService;
	const getRepository = jest.fn();
	const mockConnection = () => ({
		transaction: (cb: any) => {
			return cb({ getRepository });
		}
	});

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				PlanetaService,
				{
					provide: Connection,
					useFactory: mockConnection
				}
			]
		}).compile();

		planetaService = module.get<PlanetaService>(PlanetaService);
	});

	describe("crearPlaneta", () => {
		it("Debe crear un Planeta", async () => {
			return expect(
				planetaService.crearPlaneta(
					"tierra",
					"frio",
					10.0,
					9.8,
					24,
					140,
					10000,
					"arido",
					true
				)
			);
		});
	});

	describe("obtenerPlanetasCreados", () => {
		it("TODO: Debe retornar la lista de Planetas creados Activos", async () => {
			// @TODO
		});
	});

	describe("obtenerPlanetas", () => {
		it("TODO: Debe retornar la lista de Planetas de Star Wars desde SWAPI", async () => {
			// @TODO
		});
	});
});
