import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
	@Get("/ping")
	getHello(): string {
		return "ping";
	}
}
