export class Measurement {
    constructor(_id = '', date = '', fieldSensor = '', satelliteImage = '',
                imageDron = '', derivedData = '', value = 0,
                sensorCode = '', observation = '') {
        this._id = _id;
        this.date = date;
        this.fieldSensor = fieldSensor;
        this.satelliteImage = satelliteImage;
        this.imageDron = imageDron;
        this.derivedData = derivedData;
        this.value = value;
        this.sensorCode = sensorCode;
        this.observation = observation;
    }

    _id: string;
    date: string;
    fieldSensor: string;
    satelliteImage: string;
    imageDron: string;
    derivedData: string;
    value: number;
    sensorCode: string;
    observation: string;
}
