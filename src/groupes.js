import {InfoDataService} from './data/services/infodataservice';
import {
    GroupeViewModel
}
from './data/model/groupeviewmodel';
//
export class Groupes extends GroupeViewModel {
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
} // class Groupes
