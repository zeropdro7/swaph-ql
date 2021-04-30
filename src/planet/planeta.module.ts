import { Module } from "@nestjs/common";
import { PlanetaService } from "./planeta.service";
import { PlanetaResolver } from "./planeta.resolver";

@Module({
	imports: [],
	providers: [PlanetaResolver, PlanetaService],
	exports: [PlanetaService]
})
export class PlanetaModule {}
