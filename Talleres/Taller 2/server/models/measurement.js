const mongoose = require('mongoose');
const { Schema } = mongoose;

const measurementSchema = new Schema({
    date: { type: Date, required: true },
    fieldSensor: { type: String, required: true },
    satelliteImage: { type: String, required: true},
    imageDron: { type: String, required: true },
    derivedData: { type: String, required: true },
    value: { type: Number, required: true },
    sensorCode: { type: String, required: true },
    observation: { type: String, required: true }
});

module.exports = mongoose.model('Measurement', measurementSchema);