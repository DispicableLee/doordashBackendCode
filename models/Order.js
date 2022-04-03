const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customer_phone_number: String, // “562-922-2687”
    customer_email: String, // “peter@hackercrunch.com”
    items: Array,
    restaurant_id: String,
    total_itemized_cost: Number,
    tax_cost: Number,
    total_cost: Number,
    pick_up_time: String 
    
})

module.exports = mongoose.model("Order", OrderSchema)