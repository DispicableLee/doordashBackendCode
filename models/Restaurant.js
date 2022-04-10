const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    restaurant_name: String,
    menus: Array,
    email: String,
    about_description: String,
    wait_time: String,
    rating: Number,
    availability: {
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String,
        saturday: String,
        sunday: String
    }
})

module.exports = mongoose.model("Restaurant", RestaurantSchema)