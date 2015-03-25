// unites.js
import {InfoDataService} from './data/services/infodataservice';
import {
    UniteViewModel
}
from './data/model/uniteviewmodel';
//
export class Unites extends UniteViewModel {
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
} // class Unites
