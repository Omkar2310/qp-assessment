"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const database_1 = require("../db/database");
const sequelize_typescript_1 = require("sequelize-typescript");
exports.User = database_1.sequelize.define("users", {
    user_id: {
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_typescript_1.DataType.STRING,
        // allowNull: false,
    },
    password: {
        type: sequelize_typescript_1.DataType.STRING,
        // allowNull: false,
    },
    isAdmin: {
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: false
    }
});
//# sourceMappingURL=user.js.map