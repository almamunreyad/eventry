import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to MongoDB");
        return conn;
    } catch (err) {
        console.log("Error connecting to MongoDB", err);
        // process.exit(1);
    }
}

export default dbConnect;