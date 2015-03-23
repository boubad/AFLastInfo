//baseitem.js
import {
    moment
}
from 'moment';
//
export class BaseItem {
    constructor(oMap) {
            this._id = null;
            this._rev = null;
            if ((oMap !== undefined) && (oMap !== null)) {
                if (oMap._id !== undefined) {
                    this.id = oMap._id;
                }
                if (oMap._rev !== undefined) {
                    this.rev = oMap._rev;
                }
            } // oMap
        } // constructor
        //
    get id() {
            return (this._id !== undefined) ? this._id : null;
        } // id
    set id(s) {
            if ((s !== undefined) && (s !== null) &&
                (s.toString().trim().length > 0)) {
                this._id = s;
            } else {
                this._id = null;
            }
        } // id
    get has_id() {
        return (this.id !== null);
    }
    get rev() {
            return (this._rev !== undefined) ? this._rev : null;
        } // id
    set rev(s) {
            if ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) {
                this._rev = s;
            } else {
                this._rev = null;
            }
        } // id
    get has_rev() {
            return (this.rev !== null);
        }
        //
    get collection_name() {
        return null;
    }
    get has_collection_name() {
        return (this.collection_name !== null);
    }
    get type() {
        return null;
    }
    get has_type() {
            return (this.type !== null);
        }
        //
    get is_storeable() {
        return this.has_type && this.has_collection_name;
    }
    to_insert_map(oMap) {
            if (this.has_type) {
                oMap.type = this.type;
            }
        } // toInsertMap
    to_fetch_map(oMap) {
            this.to_insert_map(oMap);
            if (this.has_id) {
                oMap._id = this.id;
            }
            if (this.has_rev) {
                oMap._rev = this.rev;
            }
        } // to_fetch_map
    toString() {
            let oMap = {};
            this.to_fetch_map(oMap);
            return JSON.stringify(oMap);
        } // toString
        //
    static get date_format() {
        return 'YYYY-MM-DD';
    }
    static check_date(d) {
            let dRet = null;
            if ((d !== undefined) && (d !== null)) {
                let x = moment(d);
                if (x.isValid()) {
                    dRet = x.toDate();
                }
            }
            return dRet;
        } // check_date
    static string_to_date(s) {
            let dRet = null;
            if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
                let x = moment(s, BaseItem.date_format);
                if (x.isValid()) {
                    dRet = x.toDate();
                }
            }
            return dRet;
        } // string_to_date
    static date_to_string(d) {
            let sRet = null;
            if ((d !== undefined) && (d !== null)) {
                let x = moment(d);
                if (x.isValid()) {
                    sRet = x.format(BaseItem.date_format);
                }
            }
            return sRet;
        } // date_to_string
        static array_contains(cont, val) {
          if ((cont !== undefined) && (cont !== null) && (val !== undefined) &&
            (val !== null)) {
            let s = val.toString().trim().toLowerCase();
            if (s.length > 0) {
              let n = cont.length;
              for (let i = 0; i < n; ++i) {
                let x = cont[i];
                if ((x !== undefined) && (x !== null)) {
                  let ss = x.toString().trim().toLowerCase();
                  if (ss == s) {
                    return true;
                  }
                }
              }// i
            }// s
          }
          return false;
        }// _array_contains
        static array_add(cont, val) {
          if ((cont !== undefined) && (cont !== null) && (val !== undefined) &&
            (val !== null)) {
            let s = val.toString().trim().toLowerCase();
            if (s.length > 0) {
              let bFound = false;
              var n = cont.length;
              for (let i = 0; i < n; ++i) {
                let x = cont[i];
                if ((x !== undefined) && (x !== null)) {
                  let ss = x.toString().trim().toLowerCase();
                  if (ss == s) {
                    bFound = true;
                    break;
                  }
                }
              }// i
              if (!bFound) {
                cont.push(val);
              }
            }// val
          }
        }// _array_add
        static array_remove(cont, val) {
          if ((cont !== undefined) && (cont !== null) && (val !== undefined) &&
            (val !== null)) {
            let s = val.toString().trim().toLowerCase();
            if (s.length > 0) {
              let index = -1;
              let n = cont.length;
              for (let i = 0; i < n; ++i) {
                let x = cont[i];
                if ((x !== undefined) && (x !== null)) {
                  let ss  = x.toString().trim().toLowerCase();
                  if (ss == s) {
                    index = i;
                    break;
                  }
                }
              }// i
              if (index >= 0) {
                cont = cont.splice(index, 1);
              }
            }// val
          }
        }// _array_add
} // class BaseItem
