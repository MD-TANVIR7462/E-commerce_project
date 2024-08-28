import mongoose from "mongoose";
import app from "./app";
require("dotenv").config();

const port = process.env.port
async function main() {
    try {
        await mongoose.connect(process.env.Db_url as string);
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch (error) {
        console.log(error, "error on server.ts")
    }
}

main()