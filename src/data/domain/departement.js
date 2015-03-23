// departement.js
//
import {
    SigleNameItem
}
from './siglenameitem';
//
export class Departement extends SigleNameItem {
    constructor(oMap) {
            super(oMap);
        } // constructor
    get type() {
        return 'departement';
    }
    get collection_name() {
        return 'departements';
    }
} // class Departement