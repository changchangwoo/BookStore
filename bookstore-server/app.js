/* 이창우 */
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors")

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

const userRouter = require("./routes/users.js");
const bookRouter = require("./routes/books.js");
const likeRouter = require("./routes/likes.js");
const cartRouter = require("./routes/carts.js");
const orderRouter = require("./routes/orders.js");
const categoryRouter = require("./routes/category.js");

app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/likes", likeRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);
app.use("/category", categoryRouter);
app.listen(process.env.PORT); // 7788
