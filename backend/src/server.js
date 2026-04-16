import {ENV} from "./lib/env.js";
import express from "express";
import { connectDB } from "./lib/db.js";
import router from "./routes/lead.route.js";




const app = express();
const PORT = ENV.PORT;


app.use(express.json());
app.use("/api/", router);




app.listen(PORT, () => {
    console.log(`Server listening of port: ${PORT}`);

});

connectDB();
