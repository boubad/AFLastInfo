//departementperson.js
import {
    DepartementItem
}
from './departementitem';
//
export class DepartementPerson extends DepartementItem {
    constructor(oMap) {
        super(oMap);
        this._personid = null;
        this._fullname = null;
        if ((oMap !== undefined) && (oMap !== null)) {
            if (oMap.personid !== undefined) {
                this.personid = oMap.personid;
            }
            if (oMap.fullname !== undefined) {
                this.fullname = oMap.fullname;
            }
        } // oMap
    } // constructor
    get personid() {
        return (this._personid !== undefined) ? this._personid : null;
    } // id
    set personid(s) {
        if ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) {
            this._personid = s;
        } else {
            this._personid = null;
        }
    } // id
    get has_personid() {
        return (this.personid !== null);
    }
    get fullname() {
        return (this._fullname !== undefined) ? this._fullname : null;
    }
    set fullname(s) {
        this._fullname = ((s !== undefined) && (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get has_fullname() {
        return (this.fullname !== null);
    }
    change_person(p) {
        if ((p !== undefined) && (p !== null) && (p.fullname !== undefined) && (p.id !== undefined)) {
            this.fullname = p.fullname;
            this.personid = p.id;
        } // p
    }
    get is_storeable() {
        return (super.is_storeable && this.has_personid && this.has_fullname);
    }
    to_insert_map(oMap) {
        super.to_insert_map(oMap);
        if (this.has_personid) {
            oMap.personid = this.personid;
        }
        if (this.has_fullname) {
            oMap.fullname = this.fullname;
        }
    } // toInsertMap
} // class DepartementPerson