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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const adminRouter_1 = __importDefault(require("./routes/adminRouter"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const database_1 = require("./db/database");
app.use(express.json());
app.use('/user', userRouter_1.default);
app.use('/admin', adminRouter_1.default);
app.use('/auth', authRouter_1.default);
/**
 * Handling for wrong route/path
 */
app.all('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    // await connectDatabase();
    yield database_1.sequelize.sync({ force: false });
    return console.log(`Server listening at ${port}`);
}));
//# sourceMappingURL=index.js.map