const mongoose = require("mongoose");

const vinSchema = new mongoose.Schema({
    vin: {type: String, required:true},
    make: {type: String, required:true},
    model: String,
    modelYear: String,
    engineHp: String,
    fuelInjection: String,
});

module.exports = Vin = mongoose.model("Vin", vinSchema);