const express = require("express");
const app = express();
const port = 3000;
import userRouter from "./routes/userRouter";
import adminRouter from "./routes/adminRouter";
import authRouter from "./routes/authRouter";
import { sequelize } from "./db/database";

app.use(express.json());

app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

/**
 * Handling for wrong route/path
 */
app.all('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
})

app.listen(port, async () => {
    // await connectDatabase();
    await sequelize.sync({force: false});
    return console.log(`Server listening at ${port}`);
})
