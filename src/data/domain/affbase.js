// affectationbase.js
import {
    DepartementItem
}
from './departementitem';
//
export class AffectationBase extends DepartementItem {
    constructor(oMap) {
            super(oMap);
            this._anneeid = null;
            this._semestreid = null;
            this._groupeid = null;
            this._uniteid = null;
            this._matiereid = null;
            this._personid = null;
            this._profid = null;
            this._etudid = null;
            this._fullname = null;
            this._genre = null;
            this._date = null;
            this._status = null;
            if ((oMap !== undefined) && (oMap !== null)) {
              if (oMap.status !== undefined){
                this.status = oMap.status;
              }
              if (oMap.date !== undefined){
                this.date = oMap.date;
              }
              if (oMap.genre !== undefined) {
                this.genre = oMap.genre;
            }
                if (oMap.anneeid !== undefined) {
                    this.anneeid = oMap.anneeid;
                }
                if (oMap.semestreid !== undefined) {
                    this.semestreid = oMap.semestreid;
                }
                if (oMap.groupeid !== undefined) {
                    this.groupeid = oMap.groupeid;
                }
                if (oMap.uniteid !== undefined) {
                    this.uniteid = oMap.uniteid;
                }
                if (oMap.matiereid !== undefined) {
                    this.matiereid = oMap.matiereid;
                }
                if (oMap.personid !== undefined) {
                    this.personid = oMap.personid;
                }
                if (oMap.enseignantid !== undefined) {
                    this.enseignantid = oMap.enseignantid;
                }
                if (oMap.etudiantid !== undefined) {
                    this.etudiantd = oMap.etudiantid;
                }
                if (oMap.fullname !== undefined) {
                    this.fullname = oMap.fullname;
                }
            } // oMap
        } // constructor
        get status() {
            return (this._status !== undefined) ? this._status : null;
        }
        set status(s) {
            this._status = ((s !== undefined) && (s !== null) && (s.trim().length > 0)) ? s.trim().toLowerCase() : null;
        }
        get has_status() {
            return (this.status !== null);
        }
        get date() {
            return (this._date !== undefined) ? this._date : null;
        }
        set date(s) {
            this._date = (s !== undefined) ? s : null;
        }
        get has_date() {
            return (this.date !== null);
        }
    get genre() {
        return (this._genre !== undefined) ? this._genre : null;
    }
    set genre(s) {
        this._genre = ((s !== undefined) && (s !== null) && (s.trim().length > 0))
        ? s.trim().toLowerCase() : null;
    }
    get has_genre() {
        return (this.genre !== null);
    }
    get anneeid() {
        return (this._anneeid !== undefined) ? this._anneeid : null;
    }
    set anneeid(s) {
        if ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) {
            this._anneeid = s;
        }
        else {
            this._anneeid = null;
        }
    }
    get has_anneeid() {
            return (this.anneeid !== null);
        }
        //
    get semestreid() {
        return (this._semestreid !== undefined) ? this._semestreid : null;
    }
    set semestreid(s) {
        if ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) {
            this._semestreid = s;
        }
        else {
            this._semestreid = null;
        }
    }
    get has_semestreid() {
            return (this.semestreid !== null);
        }
        //
    get groupeid() {
        return (this._groupeid !== undefined) ? this._groupeid : null;
    }
    set groupeid(s) {
        if ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) {
            this._groupeid = s;
        }
        else {
            this._groupeid = null;
        }
    }
    get has_groupeid() {
            return (this.groupeid !== null);
        }
        //
    get uniteid() {
        return (this._uniteid !== undefined) ? this._uniteid : null;
    }
    set uniteid(s) {
        if ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) {
            this._uniteid = s;
        }
        else {
            this._uniteid = null;
        }
    }
    get has_uniteid() {
            return (this.uniteid !== null);
        }
        //
    get matiereid() {
        return (this._matiereid !== undefined) ? this._matiereid : null;
    }
    set matiereid(s) {
        if ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) {
            this._matiereid = s;
        }
        else {
            this._matiereid = null;
        }
    }
    get has_matiereid() {
            return (this.matiereid !== null);
        }
        //
    get personid() {
        return (this._personid !== undefined) ? this._personid : null;
    }
    set personid(s) {
        if ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) {
            this._personid = s;
        }
        else {
            this._personid = null;
        }
    }
    get has_personid() {
            return (this.personid !== null);
        }
        //
    get enseignantid() {
        return (this._profid !== undefined) ? this._profid : null;
    }
    set enseignantid(s) {
        if ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) {
            this._profid = s;
        }
        else {
            this._profid = null;
        }
    }
    get has_enseignantid() {
            return (this.enseignantid !== null);
        }
        //
    get etudiantid() {
        return (this._etudid !== undefined) ? this._etudid : null;
    }
    set etudiantid(s) {
        if ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) {
            this._etudid = s;
        }
        else {
            this._etudid = null;
        }
    }
    get has_etudiantid() {
            return (this.etudiantid !== null);
        }
        //
    get fullname() {
        return (this._fullname !== undefined) ? this._fullname : null;
    }
    set fullname(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._fullname = s.trim();
        }
        else {
            this._fullname = null;
        }
    }
    get has_fullname() {
            return (this.anneeid !== null);
        }
        //
    get is_storeable() {
            return (super.is_storeable && this.has_anneeid && this.has_semestreid);
        }
        //
    to_insert_map(oMap) {
            super.to_insert_map(oMap);
            if (this.has_status){
              oMap.status = this.status;
            }
            if (this.has_date){
              oMap.date = this.date;
            }
            if (this.has_genre){
              oMap.genre = this.genre;
            }
            if (this.has_anneeid) {
                oMap.anneeid = this.anneeid;
            }
            if (this.has_semestreid) {
                oMap.semestreid = this.semestreid;
            }
            if (this.has_groupeid) {
                oMap.groupeid = this.groupeid;
            }
            if (this.has_uniteid) {
                oMap.uniteid = this.uniteid;
            }
            if (this.has_matiereid) {
                oMap.matiereid = this.matiereid;
            }
            if (this.has_personid) {
                oMap.personid = this.personid;
            }
            if (this.has_enseignantid) {
                oMap.enseignantid = this.enseignantid;
            }
            if (this.has_etudiantid) {
                oMap.etudiantd = this.etudiantid;
            }
            if (this.has_fullname) {
                oMap.fullname = this.fullname;
            }
        } // to_insert_map
} // class AffectationBase
