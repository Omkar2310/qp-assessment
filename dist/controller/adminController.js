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
const validation_1 = require("../utils/validation");
const product_1 = require("../db/models/product");
function addProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { error } = validation_1.productSchema.validate(req.body);
        if (error) {
            console.log("Validation Error");
            return res.status(400).json({ message: error.details[0].message });
        }
        try {
            const newProduct = yield product_1.Products.create(req.body);
            res.status(200).json({ message: "Added Product successfully", data: newProduct });
        }
        catch (error) {
            res.status(500).json({ message: "Error in adding Product" });
        }
    });
}
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            let product = yield product_1.Products.findByPk(id);
            if (!product) {
                res.status(500).json({ message: "Product not found for updation" });
            }
            let updatedProduct = yield product_1.Products.update(req.body, { where: { product_id: id } });
            res.status(200).json({ message: "Updated Product successfully", rowsUpdated: updatedProduct });
        }
        catch (error) {
            res.status(500).json({ message: "Error in updating Product" });
        }
    });
}
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield product_1.Products.destroy({ where: { product_id: id } });
            res.status(200).json({ message: "Product Delete successfully" });
        }
        catch (error) {
            res.status(500).json({ message: "Error in deleting Product" });
        }
    });
}
exports.default = { addProduct, updateProduct, deleteProduct };
//# sourceMappingURL=adminController.js.map