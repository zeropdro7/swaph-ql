import { GraphQLModule } from "@nestjs/graphql";
import { GraphqlOptions } from "./graphql.options";
import { ConfigService } from "@nestjs/config";

export const graphqlProviders = [
	GraphQLModule.forRootAsync({
		useClass: GraphqlOptions,
		inject: [ConfigService]
	})
];
