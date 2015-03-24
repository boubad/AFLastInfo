// annee.js
//
import {
     IntervallItem
}
from './intervalitem';
//
export class Annee extends IntervallItem {
    constructor(oMap) {
        super(oMap);
    }
    get type() {
        return 'annee';
    }
    get collection_name() {
        return 'annees';
    }
} // class Annee
