// annees.js
import {
    InfoDataService
}
from './data/services/infodataservice';
import {
    AnneeViewModel
}
from './data/model/anneeviewmodel';
//
export class Annees extends AnneeViewModel {
    static inject() {
        return [InfoDataService];
    }
    constructor(service) {
        super(service);
    }
    activate(params) {
        if (params.id !== undefined) {
            this.departementid = params.id;
        }
    }
} // class Annees