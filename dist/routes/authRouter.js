"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const authController_1 = __importDefault(require("../controller/authController"));
router.post('/signin', authController_1.default.signIn);
router.post('/signup', authController_1.default.signUp);
exports.default = router;
//# sourceMappingURL=authRouter.js.map