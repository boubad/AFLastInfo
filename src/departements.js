// departements.js
import {InfoDataService} from './data/services/infodataservice';
import {
    DepartementViewModel
}
from './data/model/departementviewmodel';
//
export class Departements extends DepartementViewModel {
    static inject() {
        return [InfoDataService];
    }
    constructor(service) {
        super(service);
    }
    activate() {
        if (this.items.length < 1) {
            return this.refreshAll();
        } else {
            return true;
        }
    }
} // class Departements