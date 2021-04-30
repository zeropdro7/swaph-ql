import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { TypeOrmConfigService } from "./database.service";

export const databaseProviders = [
	TypeOrmModule.forRootAsync({
		useClass: TypeOrmConfigService,
		inject: [ConfigService]
	})
];
