import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlanetasTable1619769696374 implements MigrationInterface {
    private readonly tableName = "planetas";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: this.tableName,
				columns: [
					{
						name: "id",
						type: "int",
						isPrimary: true,
						isNullable: false,
						isGenerated: true,
						generationStrategy: "increment"
					},
					{
						name: "nombre",
						type: "varchar",
						length: "50",
						isNullable: false
					},
					{
						name: "clima",
						type: "varchar",
                        length: "20",
						isNullable: false
					},
                    {
						name: "diametro",
						type: "float",
						isNullable: false
					},
                    {
						name: "gravedad",
						type: "float",
						isNullable: false
					},
                    {
						name: "periodo_de_traslacion",
						type: "int",
						isNullable: false
					},
                    {
						name: "periodo_de_rotacion",
						type: "int",
						isNullable: false
					},
                    {
						name: "poblacion",
						type: "int",
						isNullable: false
					},
                    {
						name: "tipo_de_terreno",
						type: "varchar",
                        length: "20",
						isNullable: false
					},
                    {
						name: "en_actividad",
						type: "boolean",
						isNullable: false
					}
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(this.tableName);
	}
}
