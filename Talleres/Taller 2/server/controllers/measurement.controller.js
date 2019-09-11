const Measurement = require('../models/measurement');

const measurementCtrl = {};

measurementCtrl.getMeasurements = async (req, res, next) => {
    const measurements = await Measurement.find();
    res.json(measurements);
};

measurementCtrl.createMeasurement = async (req, res, next) => {
    const measurement = new Measurement({
        date: req.body.date,
        fieldSensor: req.body.fieldSensor,
        satelliteImage: req.body.satelliteImage,
        imageDron: req.body.imageDron,
        derivedData: req.body.derivedData,
        value: req.body.value,
        sensorCode: req.body.sensorCode,
        observation: req.body.observation
    });
    await measurement.save();
    res.json({status: 'Measurement created'});
};

measurementCtrl.getMeasurement = async (req, res, next) => {
    const { id } = req.params;
    const measurement = await Measurement.findById(id);
    res.json(measurement);
};

measurementCtrl.editMeasurement = async (req, res, next) => {
    const { id } = req.params;
    const measurement = {date: req.body.date,
        fieldSensor: req.body.fieldSensor,
        satelliteImage: req.body.satelliteImage,
        imageDron: req.body.imageDron,
        derivedData: req.body.derivedData,
        value: req.body.value,
        sensorCode: req.body.sensorCode,
        observation: req.body.observation
    };
    await Measurement.findByIdAndUpdate(id, {$set: measurement}, {new: true});
    res.json({status: 'Measurement Updated'});
};

measurementCtrl.deleteMeasurement = async (req, res, next) => {
    await Measurement.findByIdAndRemove(req.params.id);
    res.json({status: 'Measurement Deleted'});
};

module.exports = measurementCtrl;