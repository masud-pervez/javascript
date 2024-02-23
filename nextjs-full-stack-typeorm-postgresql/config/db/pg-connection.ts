import "reflect-metadata"
import { TodosEntity } from "@/typeorm/todos/todos-entity";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: "101",
    database: "next_setup",
    synchronize: true,
    logging: false,
    entities: [TodosEntity],
    // subscribers: [],
    // migrations: [],
})

 AppDataSource.initialize()
    .then(() => {
        console.log("Database connection successfully");
    })
    .catch((error) => console.log(error))


