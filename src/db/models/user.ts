import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";

export const User = sequelize.define(
    "users",
    {
        user_id: {
            type: DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            // allowNull: false,
        },
        password: {
            type: DataType.STRING,
            // allowNull: false,
        },
        isAdmin: {
            type: DataType.BOOLEAN,
            defaultValue: false
        }
    }
)