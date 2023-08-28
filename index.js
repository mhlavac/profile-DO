import express from "express";
import connectMongoose from "./connectDB.js";
import router from "./router/routerProfile.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api", router);

connectMongoose();
app.listen(port);
console.log("listening on port:", port);
