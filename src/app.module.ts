import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import { GraphqlModule } from './graphql/graphql.module';
import { PlanetaModule } from './planet/planeta.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
		DatabaseModule,
		GraphqlModule,
    PlanetaModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
