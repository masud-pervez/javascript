import { PhotoEntity } from "@/typeorm/photos/photo-entity";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: "101",
    database: "next_setup",
    synchronize: true,
    logging: true,
    entities: [PhotoEntity],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
.then(() => {
    console.log("Database connection successfully");
    
    // here you can start to work with your database
})
.catch((error) => console.log(error))

