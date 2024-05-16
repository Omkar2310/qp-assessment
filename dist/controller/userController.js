"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../db/models/product");
const orders_1 = require("../db/models/orders");
const database_1 = require("../db/database");
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield product_1.Products.findAll({
                attributes: ["product_id", "name", "quantity", "price"],
                order: [["product_id", "ASC"]],
            });
            res.status(200).json(products);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    });
}
function addToCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user_id, price } = req.body;
            let cartDetails = req.body.cart;
            database_1.sequelize
                .transaction((transaction) => __awaiter(this, void 0, void 0, function* () {
                try {
                    // 1. Add into orders table
                    const order = yield orders_1.Orders.create({
                        user_id: user_id,
                        price: price,
                    });
                    console.log("Done with order insert");
                    let orderDetails = [];
                    let productUpdate = [];
                    cartDetails.map((cartItem) => {
                        orderDetails.push({
                            order_id: order.order_id,
                            product_id: cartItem.product_id,
                            quantity: cartItem.quantity,
                        });
                        productUpdate.push({
                            quantity: cartItem.quantity,
                            product_id: cartItem.product_id,
                        });
                    });
                    // 2. Add into order details table
                    console.log("Order details " + JSON.stringify(orderDetails));
                    const orderDetailData = yield orders_1.OrderDetails.bulkCreate(orderDetails);
                    // 3. reduce the quantity
                    Promise.all(productUpdate.map((productData) => __awaiter(this, void 0, void 0, function* () {
                        let product = yield product_1.Products.findOne({
                            where: { product_id: productData.product_id },
                        });
                        console.log(product.dataValues);
                        yield product_1.Products.update({ quantity: product.dataValues.quantity - productData.quantity }, { where: { product_id: productData.product_id } });
                    })));
                    res.status(200).json(orderDetailData);
                }
                catch (error) {
                    yield transaction.rollback();
                }
            }))
                .catch((error) => {
                console.error("Transaction failed to initialize:", error);
                res.status(500).json({ message: "Internal error" });
            });
        }
        catch (error) {
            res.status(500).json({ message: "Internal error" });
        }
    });
}
exports.default = { getProducts, addToCart };
//# sourceMappingURL=userController.js.map