const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    menu_name: String,
    restaurant_id: String,
    items: Array
})

module.exports = mongoose.model("Menu", MenuSchema)