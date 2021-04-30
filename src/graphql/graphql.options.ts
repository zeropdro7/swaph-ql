import { Injectable } from "@nestjs/common";
import { GqlModuleOptions, GqlOptionsFactory } from "@nestjs/graphql";

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
	createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
		const schemaModuleOptions: Partial<GqlModuleOptions> = {};
		if (process.env.NODE_ENV !== "production") {
			schemaModuleOptions.autoSchemaFile = "src/schema.gql";
		} else {
			schemaModuleOptions.typePaths = ["src/*.gql"];
		}

		return {
			introspection: true,
			playground: true,
			resolvers: {},
			cors: {
				origin: true,
				credentials: true
			},
			...schemaModuleOptions
		};
	}
}
