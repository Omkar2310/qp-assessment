const express = require("express");
const router = express.Router();

import userController from "../controller/userController";

router.get('/', userController.getProducts)
router.post('/add', userController.addToCart)

export default router;
