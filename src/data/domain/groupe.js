// groupe.js
//
import {
    DepartementSigleNameItem
}
from './departementsiglename';
//
export class Groupe extends DepartementSigleNameItem {
    constructor(oMap) {
        super(oMap);
    }
    get type() {
        return 'groupe';
    }
    get collection_name() {
        return 'groupes';
    }
} // class Groupe
