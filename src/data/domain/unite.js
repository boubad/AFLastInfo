// unite.js
//
import {
    DepartementSigleNameItem
}
from './departementsiglename';
//
export class Unite extends DepartementSigleNameItem {
    constructor(oMap) {
        super(oMap);
    }
    get type() {
        return 'unite';
    }
    get collection_name() {
        return 'unites';
    }
} // class Unite
