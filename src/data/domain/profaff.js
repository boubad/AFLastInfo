// profaff.js
//
import {
    Affectation
}
from './affectation';
//
export class ProfAffectation extends Affectation {
    constructor(oMap) {
        super(oMap);
    }
    get type() {
        return 'profaff';
    }
    get collection_name() {
        return 'profaffs';
    }
    get is_storeable() {
        return (super.is_storeable && this.has_uniteid && this.has_matiereid && this.has_enseignantid);
    }
} // class EtudAffectation
