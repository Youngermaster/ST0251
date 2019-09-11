export class Indicator {
    constructor(_id = '', code = '', name = '', description = '',
                hidrycEstress = '', foliarNitrogen = '', haverstIndex = '',
                radialVolumetricDensity = '', priority = 0) {
        this._id = _id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.hidrycEstress = hidrycEstress;
        this.foliarNitrogen = foliarNitrogen;
        this.haverstIndex = haverstIndex;
        this.radialVolumetricDensity = radialVolumetricDensity;
        this.priority = priority;
    }

    _id: string;
    code: string;
    name: string;
    description: string;
    hidrycEstress: string;
    foliarNitrogen: string;
    haverstIndex: string;
    radialVolumetricDensity: string;
    priority: number;
}
