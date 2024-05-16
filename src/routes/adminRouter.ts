const express = require("express");
const router = express.Router();

import adminController from "../controller/adminController";

router.post('/add', adminController.addProduct);
router.put('/update/:id', adminController.updateProduct);
router.delete('/delete/:id', adminController.deleteProduct);

export default router;
