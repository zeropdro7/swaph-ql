import { Test, TestingModule } from "@nestjs/testing";
import { Connection } from "typeorm";
import { PlanetaService } from "./planeta.service";
import { Planeta } from "./entidades/planeta.entity";

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
			// Arrange
			const findOne = jest.fn();
			findOne.mockImplementation(() => undefined);
			getRepository.mockImplementation(() => ({ findOne }));

			// Act and assert
			return expect(
				planetaService.crearPlaneta()
			).rejects.toThrow("No se pudo crear el planeta");
		});
	});
});
