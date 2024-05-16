import { sequelize } from "../database";
import { DataType } from "sequelize-typescript";

export const Orders = sequelize.define(
    "orders",
    {
        order_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            // autoIncrementIdentity: true
        },
        user_id: {
            type: DataType.STRING,
            allowNull: false,
            references: {
                key: 'user_id',
                model: 'users'
            }
        },
        price: {
            type: DataType.INTEGER,
            allowNull: false
        }
    }
)

export const OrderDetails = sequelize.define(
    "order_details",
    {
        quantity: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        order_id: {
            type: DataType.INTEGER,
            references:  {
                key: 'order_id',
                model: 'orders'
            }
        },
        product_id: {
            type: DataType.INTEGER,
            references:  {
                key: 'product_id',
                model: 'products',
            }
        },
    }
)