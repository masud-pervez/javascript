import Joi from 'joi';

export const configValidationSchema = Joi.object({
  API_PORT: Joi.number().default(3900).required(),
  UPLOAD_PATH: Joi.string().required(),
  MAX_FILE_SIZE: Joi.number().required(),
  MAX_FILE_COUNTS: Joi.number().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
});
