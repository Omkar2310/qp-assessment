"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const database_1 = require("../database");
const sequelize_typescript_1 = require("sequelize-typescript");
exports.Products = database_1.sequelize.define("products", {
    product_id: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        // autoIncrementIdentity: true
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }
});
//# sourceMappingURL=product.js.map