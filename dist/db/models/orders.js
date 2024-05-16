"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetails = exports.Orders = void 0;
const database_1 = require("../database");
const sequelize_typescript_1 = require("sequelize-typescript");
exports.Orders = database_1.sequelize.define("orders", {
    order_id: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        // autoIncrementIdentity: true
    },
    user_id: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        references: {
            key: 'user_id',
            model: 'users'
        }
    },
    price: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }
});
exports.OrderDetails = database_1.sequelize.define("order_details", {
    quantity: {
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    },
    order_id: {
        type: sequelize_typescript_1.DataType.INTEGER,
        references: {
            key: 'order_id',
            model: 'orders'
        }
    },
    product_id: {
        type: sequelize_typescript_1.DataType.INTEGER,
        references: {
            key: 'product_id',
            model: 'products',
        }
    },
});
//# sourceMappingURL=orders.js.map