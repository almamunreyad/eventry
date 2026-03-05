import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    // photo: {
    //     type: String,
    //     required: false,
    // },
    bio: {
        type: Array,
        required: false,
    }
});

export const userModel = mongoose.models.users ?? mongoose.model("users", schema);