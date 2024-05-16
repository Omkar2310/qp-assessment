const joi = require("joi");

export const userSchema = joi.object({
  user_id: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  isAdmin: joi.boolean()
});

export const productSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  quantity: joi.number().required(),
});
