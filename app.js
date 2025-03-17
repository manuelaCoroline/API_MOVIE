import express from "express";
import routes from "./src/routes/index.js";

const app=express();
//middleware
app.use(express.json());
//localhost:4500/
app.use("/",routes);

export default app;