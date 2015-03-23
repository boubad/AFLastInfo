//attacheddoc.js
//
import {
    DescriptionItem
}
from './descriptionitem';
//
export class AttachedDoc extends DescriptionItem {
    constructor(oMap) {
            super(oMap);
            this._data = null;
            this._name = null;
            this._genre = null;
            this._mime = null;
            if ((oMap !== undefined) && (oMap !== null)) {
                if (oMap.mimetype !== undefined) {
                    this.mimetype = oMap.mimetype;
                }
                if (oMap.genre !== undefined) {
                    this.genre = oMap.genre;
                }
                if (oMap.name !== undefined) {
                    this.name = oMap.name;
                }
                if (oMap.data !== undefined) {
                    this.data = oMap.data;
                }
            } // oMap
        } // constructor
    get data() {
            return (this._data !== undefined) ? this._data : null;
        } // id
    set data(s) {
        if ((s !== undefined) && (s !== null) && (s.length > 0)) {
            this._data = s;
        } else {
            this._data = null;
        }
    }
    get has_data() {
        return (this.data !== null);
    }
    get name() {
            return (this._name !== undefined) ? this._name : null;
        } // id
    set name(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._name = s.trim();
        } else {
            this._name = null;
        }
    }
    get has_name() {
        return (this.name !== null);
    }
    get genre() {
            return (this._genre !== undefined) ? this._genre : null;
        } // id
    set genre(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._genre = s.trim().toLowerCase();
        } else {
            this._genre = null;
        }
    }
    get has_genre() {
        return (this.genre !== null);
    }
    get mimetype() {
            return (this._mime !== undefined) ? this._mime : null;
        } // id
    set mimetype(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._mime = s.trim();
        } else {
            this._mime = null;
        }
    }
    get has_mimetype() {
        return (this.mimetype !== null);
    }
    to_insert_map(oMap) {
            super.to_insert_map(oMap);
            if (this.has_mimetype) {
                oMap.mimetype = this.mimetype;
            }
            if (this.has_genre) {
                oMap.genre = this.genre;
            }
            if (this.has_name) {
                oMap.name = this.name;
            }
            if (this.has_data) {
                oMap.data = this.data;
            }
        } // toInsertMap
    get is_storeable() {
        return (this.has_mimetype &&
            this.has_genre && this.has_name && this.has_data);
    }
    get type() {
        return 'attacheddoc';
    }
    get collection_name() {
        return 'attacheddocs';
    }
} // class DescriptionItem