//etudiants.js
import {InfoDataService} from './data/services/infodataservice';
import {
    EtudiantViewModel
}
from './data/model/etudiantviewmodel';
//
export class Etudiants extends EtudiantViewModel {
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
} // class Etudiants
