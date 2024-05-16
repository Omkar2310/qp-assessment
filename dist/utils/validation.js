"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = exports.userSchema = void 0;
const joi = require("joi");
exports.userSchema = joi.object({
    user_id: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    isAdmin: joi.boolean()
});
exports.productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    quantity: joi.number().required(),
});
//# sourceMappingURL=validation.js.map