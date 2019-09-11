const mongoose = require('mongoose');
const { Schema } = mongoose;

const indicatorSchema = new Schema({
    code: { type: String, required: true},
    name: { type: String, required: true},
    description: { type: String, required: true },
    hidrycEstress: { type: String, required: true },
    foliarNitrogen: { type: String, required: true },
    haverstIndex: { type: String, required: true },
    radialVolumetricDensity: { type: String, required: true },
    priority: { type: Number, required: true}
});

module.exports = mongoose.model('Indicator', indicatorSchema);