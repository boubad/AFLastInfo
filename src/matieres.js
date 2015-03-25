// semestres.js
import {
    InfoDataService
}
from './data/services/infodataservice';
import {
    MatiereViewModel
}
from './data/model/matiereviewmodel';
//
export class Matieres extends MatiereViewModel {
    static inject() {
        return [InfoDataService];
    }
    constructor(service) {
        super(service);
    }
    activate(params) {
        if (params.id !== undefined) {
            this.uniteid = params.id;
        }
    }
} // class Matieres
