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
const user_1 = require("../db/models/user");
function signIn(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Signing IN....");
        }
        catch (error) { }
    });
}
function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { error } = validation_1.userSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        try {
            const newUser = yield user_1.User.create(req.body);
            res.status(200).json({ message: "Added user successfully", data: newUser });
        }
        catch (error) {
            res.status(500).json({ message: "Error in adding user" });
        }
    });
}
exports.default = { signIn, signUp };
//# sourceMappingURL=authController.js.map