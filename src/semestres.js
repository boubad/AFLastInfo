// semestres.js
import {
    InfoDataService
}
from './data/services/infodataservice';
import {
    SemestreViewModel
}
from './data/model/semestreviewmodel';
//
export class Semestres extends SemestreViewModel {
    static inject() {
        return [InfoDataService];
    }
    constructor(service) {
        super(service);
    }
    activate(params) {
        if (params.id !== undefined) {
            this.anneeid = params.id;
        }
    }
} // class Semestres