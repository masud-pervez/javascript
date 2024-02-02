import "reflect-metadata"
import { DataSource } from "typeorm";

const PostgresDatabaseConnection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "101",
  database: "ecommerce_next",
  entities: [
    // ....
  ],
});

PostgresDatabaseConnection.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default PostgresDatabaseConnection;
