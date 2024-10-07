import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/dados.db",
    synchronize: true,
    logging: false,
    entities: ['src/entities/*.ts'],
    migrations: ['src/migration/*.ts'],
    subscribers: [],
})
