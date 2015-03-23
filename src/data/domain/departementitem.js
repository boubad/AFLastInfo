//departementitem.js
//
import {
    DescriptionItem
}
from './descriptionitem';
//
export class DepartementItem extends DescriptionItem {
    constructor(oMap) {
            super(oMap);
            this._depid = null;
            if ((oMap !== undefined) && (oMap !== null)) {
                if (oMap.departementid !== undefined) {
                    this.departementid = oMap.departementid;
                }
            } // oMap
        } // constructor
    get departementid() {
            return (this._depid !== undefined) ? this._depid : null;
        } // id
    set departementid(s) {
            if ((s !== undefined) && (s !== null) &&
                (s.toString().trim().length > 0)) {
                this._depid = s;
            } else {
                this._depid = null;
            }
        } // id
    get has_departement_id() {
        return (this.departementid !== null);
    }
    get is_storeable() {
        return (super.is_storeable && this.has_departementid);
    }
    to_insert_map(oMap) {
            super.to_insert_map(oMap);
            if (this.has_departementid) {
                oMap.departementid = this.departementid;
            }
        } // toInsertMap
} // class DepartementItem