const mongoose = require("mongoose");
const Bike = mongoose.Schema;

const BikeSchema = new Bike({
    name: String,
    type: String,
    price: Number,
    rented: Boolean
});

module.exports = mongoose.model("Bike", BikeSchema);
