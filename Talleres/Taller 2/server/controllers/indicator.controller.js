const Indicator = require('../models/indicator');

const indicatorCtrl = {};

indicatorCtrl.getIndicators = async (req, res, next) => {
    const indicators = await Indicator.find();
    res.json(indicators);
};

indicatorCtrl.createIndicator = async (req, res, next) => {
    const indicator = new Indicator({
        code: req.body.code,
        name: req.body.name,
        description: req.body.description,
        hidrycEstress: req.body.hidrycEstress,
        foliarNitrogen: req.body.foliarNitrogen,
        haverstIndex: req.body.haverstIndex,
        radialVolumetricDensity: req.body.radialVolumetricDensity,
        priority: req.body.priority
    });
    await indicator.save();
    res.json({status: 'Indicator created'});
};

indicatorCtrl.getIndicator = async (req, res, next) => {
    const { id } = req.params;
    const indicator = await Indicator.findById(id);
    res.json(indicator);
};

indicatorCtrl.editIndicator = async (req, res, next) => {
    const { id } = req.params;
    const indicator = {
        code: req.body.code,
        name: req.body.name,
        description: req.body.description,
        hidrycEstress: req.body.hidrycEstress,
        foliarNitrogen: req.body.foliarNitrogen,
        haverstIndex: req.body.haverstIndex,
        radialVolumetricDensity: req.body.radialVolumetricDensity,
        priority: req.body.priority
    };
    await Indicator.findByIdAndUpdate(id, {$set: indicator}, {new: true});
    res.json({status: 'Indicator Updated'});
};

indicatorCtrl.deleteIndicator = async (req, res, next) => {
    await Indicator.findByIdAndRemove(req.params.id);
    res.json({status: 'Indicator Deleted'});
};

module.exports = indicatorCtrl;