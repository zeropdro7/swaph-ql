import { Module } from "@nestjs/common";
import { graphqlProviders } from "./graphql.service";

@Module({
	imports: [...graphqlProviders],
	exports: [...graphqlProviders]
})
export class GraphqlModule {}
