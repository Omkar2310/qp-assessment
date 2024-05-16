const express = require("express");
const router = express.Router();

import authController from "../controller/authController";

router.post('/signin', authController.signIn);
router.post('/signup', authController.signUp);

export default router;
