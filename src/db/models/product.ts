import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";

export const Products = sequelize.define(
    "products",
    {
        product_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            // autoIncrementIdentity: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
        price: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataType.INTEGER,
            allowNull: false
        }
    }
)