const mongoose = require("mongoose");

const vinSchema = new mongoose.Schema({
    vin: {type: String, required:true},
    make: {type: String, required:true},
    model: String,
    modelYear: Number,
    engineModel: String,
    engineHp: String,
    engineCylinders: Number,
    fuelInjection: String,
});

module.exports = Vin = mongoose.model("Vin", vinSchema);