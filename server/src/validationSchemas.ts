import * as Joi from "joi";

const schemas = {
  todoPOST: Joi.object().keys({
    name: Joi.string().max(30).required(),
    description: Joi.string().min(3).max(30).required(),
    status: Joi.boolean().required(),
  }),
  todoDETAIL: Joi.object().keys({
    id: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .message("id is not valid")
      .required(),
  }),
};

module.exports = schemas;
