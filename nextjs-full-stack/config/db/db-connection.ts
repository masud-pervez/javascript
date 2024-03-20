import "reflect-metadata";
import { DataSource } from "typeorm";
import { UsersEntity } from "@/typeorm/users/user-entity";

export const pgConnection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "101",
  database: "full_stack_next",
  synchronize: true,
  logging: true,
  entities: [UsersEntity],
  subscribers: [],
  migrations: [],
});

export const getDBConnection = async (): Promise<DataSource> => {
  if (!pgConnection.isInitialized) {
    await pgConnection
      .initialize()
      .then(() => {
        console.log("database connection successfully");
      })
      .catch((error) => console.log(error));
  }
  return pgConnection;
};

// AppDataSource.initialize()
//   .then(() => {
//     console.log("database connection successfully");
//     // here you can start to work with your database
//   })
//   .catch((error) => console.log(error));
