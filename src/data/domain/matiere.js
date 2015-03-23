// matiere.js
//
import {
    DepartementSigleNameItem
}
from './departementsiglename';
//
export class Matiere extends DepartementSigleNameItem {
    constructor(oMap ? : any) {
            super(oMap);
            this._uniteid = null;
            this._coef = null;
            this._ecs = null;
            this._mat_module = null;
            this._genre = null;
            if ((oMap != undefined) && (oMap != null)) {
                if (oMap.uniteid != undefined) {
                    this.uniteid = oMap.uniteid;
                }
                if (oMap.coefficient != undefined) {
                    this.coefficient = oMap.coefficient;
                }
                if (oMap.ecs != undefined) {
                    this.ecs = oMap.ecs;
                }
                if (oMap.genre != undefined) {
                    this.genre = oMap.genre;
                }
                if (oMap.mat_module != undefined) {
                    this.mat_module = oMap.mat_module;
                }
            } // oMap
        } // constructor

    get type() {
        return 'matiere';
    }
    get collection_name() {
        return 'matieres';
    }
    get mat_module() {
        return ((this._mat_module != undefined) && (this._mat_module != null)) ? this._mat_module : null;
    }
    set mat_module(v) {
        if ((v != undefined) && (v != null) && (v.trim().length > 0)) {
            this._mat_module = v.trim().toLowerCase();
        } else {
            this._mat_module = null;
        }
    }
    get has_mat_module() {
        return (this.mat_module != null);
    }
    get genre() {
        return ((this._genre != undefined) && (this._genre != null)) ? this._genre : null;
    }
    set genre(v) {
        if ((v != undefined) && (v != null) && (v.trim().length > 0)) {
            this._genre = v.trim().toLowerCase();
        } else {
            this._genre = null;
        }
    }
    get has_genre() {
        return (this.genre != null);
    }
    get ecs() {
        return ((this._ecs != undefined) && (this._ecs != null)) ? this._ecs : null;
    }
    set ecs(v) {
        if ((v != undefined) && (v != null) && (v > 0)) {
            this._ecs = v;
        } else {
            this._ecs = null;
        }
    }
    get has_ecs() {
        return (this.ecs != null);
    }
    get coefficient() {
        return ((this._coef != undefined) && (this._coef != null)) ? this._coef : null;
    }
    set coefficient(v) {
        if ((v != undefined) && (v != null) && (v > 0)) {
            this._coef = v;
        } else {
            this._coef = null;
        }
    }
    get has_coefficient() {
        return (this.coefficient != null);
    }
    get uniteid() {
        return (this._uniteid != undefined) ? this._uniteid : null;
    }
    set uniteid(s) {
        if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
            this._uniteid = s;
        } else {
            this._uniteid = null;
        }
    }
    get has_uniteid() {
        return (this.uniteid != null);
    }
    get is_storeable() {
        return (super.is_storeable && this.has_uniteid);
    }
    to_insert_map(oMap): void {
            super.to_insert_map(oMap);
            if (this.has_uniteid) {
                oMap.uniteid = this.uniteid;
            }
            if (this.has_genre) {
                oMap.genre = this.genre;
            }
            if (this.has_mat_module) {
                oMap.mat_module = this.mat_module;
            }
            if (this.has_coefficient) {
                oMap.coefficient = this.coefficient;
            }
            if (this.has_ecs) {
                oMap.ecs = this.ecs;
            }
        } // to_insert_map
} // class Matiere