// enseignant.js
import {
    DepartementPerson
}
from './departementperson';
//
export class Enseignant extends DepartementPerson {
    constructor(oMap) {
        super(oMap);
    }
    get type() {
        return 'prof';
    }
    get collection_name() {
        return 'profs';
    }
} // class Enseignant