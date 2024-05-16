"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const userController_1 = __importDefault(require("../controller/userController"));
router.get('/', userController_1.default.getProducts);
router.post('/add', userController_1.default.addToCart);
exports.default = router;
//# sourceMappingURL=userRouter.js.map