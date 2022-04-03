const mongoose = require("mongoose");

const URL = "mongodb+srv://robbie24:test1234@cluster0.iu9kv.mongodb.net/doordash?retryWrites=true&w=majority";

const connectDB = async () =>{
    await mongoose.connect(URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("mongoDB successfully connected");
}; 









module.exports = connectDB;