"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const adminController_1 = __importDefault(require("../controller/adminController"));
router.post('/add', adminController_1.default.addProduct);
router.put('/update/:id', adminController_1.default.updateProduct);
router.delete('/delete/:id', adminController_1.default.deleteProduct);
exports.default = router;
//# sourceMappingURL=adminRouter.js.map