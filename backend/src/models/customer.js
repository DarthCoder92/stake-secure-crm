import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    leadId: {
        type: String,
        unique: true,

    },

    name: {
        type: String,
        required: true,

    },

    phone: {
        type: String,
        required: true,

    },

    vehicle: {
        type: String,
        required: true,

    },

    status: {
        type: String,
        default: "New",
    }


}, {timestamps: true});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;