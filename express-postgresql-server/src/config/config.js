const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");
const { env_mode } = require("../enums/common.enum");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const configEnvSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(3900).required(),
    SSL: Joi.boolean().required().description("Is deployed with ssl"),
    AUTH: Joi.boolean()
      .default(true)
      .description("Is auth is required to access apis"),
    DB_HOST: Joi.string().description("Database host"),
    DB_PORT: Joi.number().description("Database port"),
    DB_USERNAME: Joi.string().description("Database username"),
    DB_PASSWORD: Joi.string().description("Database password"),
    DB_NAME: Joi.string().required().description("SQL Database name"),
    JWT_SECRET: Joi.string().required().description("JWT secret key"),
    JWT_EXPIRES: Joi.string()
      .default("7d")
      .required()
      .description("days after which jwt expire"),
    COOKIE_EXPIRES: Joi.number()
      .default(7)
      .required()
      .description("days after which cookie expire"),
    DB_BACKUP_PATH: Joi.string()
      .required()
      .description("Database file backup path"),
    UPLOAD_PATH: Joi.string().required().description("File/photo upload path"),
    MAX_FILE_UPLOAD: Joi.number()
      .default(1000000)
      .description("Maxium limit of file upload"),
    // SMS_SENDER_ID: Joi.string().required().description('SMS Sender ID'),
  })
  .unknown();

const { value: configEnv, error } = configEnvSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = configEnv || {};
