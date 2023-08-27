import mongoose from "mongoose";

const addServiceSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    service: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    },
    contact: {
        type: String,
        require: true,
    },
});

export default mongoose.model("add-service", addServiceSchema);