import { Request, Response } from "express";
import { productSchema } from "../utils/validation";
import { Products } from "../db/models/product";


async function addProduct(req: Request, res: Response) {
  const { error } = productSchema.validate(req.body);
  if (error) {
    console.log("Validation Error");
    return res.status(400).json({ message: error.details[0].message });
  }
  try {
    const newProduct = await Products.create(req.body);
    res.status(200).json({ message: "Added Product successfully", data: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error in adding Product" });
  }
}

async function updateProduct(req: Request, res: Response) {
  const { id } = req.params;
  try {
    let product = await Products.findByPk(id);
    if(!product) {
      res.status(500).json({ message: "Product not found for updation" });
    }
    let updatedProduct = await Products.update(req.body, { where : {product_id: id}});
    res.status(200).json({ message: "Updated Product successfully", rowsUpdated: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error in updating Product" });
  }
}

async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await Products.destroy({ where : {product_id: id}});
    
    res.status(200).json({ message: "Product Delete successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleting Product" });
  }
}

export default { addProduct, updateProduct, deleteProduct };
