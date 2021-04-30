import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { validationOptions } from "./validation.options";

global["fetch"] = require("node-fetch");

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe(validationOptions));
	await app.listen(7000);
}
bootstrap();
