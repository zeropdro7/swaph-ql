import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
		GraphQLModule,
		DatabaseModule,
		GraphqlModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
