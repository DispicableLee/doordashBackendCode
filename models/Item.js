const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    restaurant_id: String,
    menu_id: String,
    price: Number,
    imageUrl: String,
    item_name: String
    
})

module.exports = mongoose.model("Item", ItemSchema)