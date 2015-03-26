// enseignants.js
import {InfoDataService} from './data/services/infodataservice';
import {
    EnseignantViewModel
}
from './data/model/enseignantviewmodel';
//
export class Enseignants extends EnseignantViewModel {
    static inject() {
        return [InfoDataService];
    }
    constructor(service) {
        super(service);
    }
    activate(params) {
        if (params.id !== undefined){
            this.departementid = params.id;
        }
    }
} // class Enseignants
