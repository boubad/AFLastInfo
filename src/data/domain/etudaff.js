// etudaff.js
//
import {
    Affectation
}
from './affectation';
//
export class EtudAffectation extends Affectation {
    constructor(oMap) {
        super(oMap);
    }
    get type() {
        return 'etudaff';
    }
    get collection_name() {
        return 'etudaffs';
    }
    get is_storeable() {
        return (super.is_storeable && this.has_etudiantid);
    }
} // class EtudAffectation
