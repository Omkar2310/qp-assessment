import { Request, Response } from "express";
import { Products } from "../db/models/product";
import { OrderDetails, Orders } from "../db/models/orders";
import { sequelize } from "../db/database";

async function getProducts(req: Request, res: Response) {
  try {
    const products = await Products.findAll({
      attributes: ["product_id", "name", "quantity", "price"],
      order: [["product_id", "ASC"]],
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function addToCart(req: Request, res: Response) {
  try {
    const { user_id, price } = req.body;
    let cartDetails: any[] = req.body.cart;
    sequelize
      .transaction(async (transaction) => {
        try {
          // 1. Add into orders table
          const order: any = await Orders.create({
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
          const orderDetailData = await OrderDetails.bulkCreate(orderDetails);

          // 3. reduce the quantity
          Promise.all(productUpdate.map(async (productData) => {
            let product = await Products.findOne({
              where: { product_id: productData.product_id },
            });
            console.log(product.dataValues);
            await Products.update(
              { quantity: product.dataValues.quantity - productData.quantity },
              { where: { product_id: productData.product_id } }
            );
          }));
          res.status(200).json(orderDetailData);
        } catch (error) {
          await transaction.rollback();
        }
      })
      .catch((error) => {
        console.error("Transaction failed to initialize:", error);
        res.status(500).json({ message: "Internal error" });
      });
  } catch (error) {
    res.status(500).json({ message: "Internal error" });
  }
}

export default { getProducts, addToCart };
