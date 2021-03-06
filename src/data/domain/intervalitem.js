//intervalitem.js
//
import {
    BaseItem
}
from './baseitem';
import {
    DepartementSigleNameItem
}
from './departementsiglename';
//
export class IntervallItem extends DepartementSigleNameItem {
    constructor(oMap) {
            super(oMap);
            this._start = null;
            this._end = null;
            if ((oMap !== undefined) && (oMap !== null)) {
                if (oMap.startDate != undefined) {
                    this.startDate = oMap.startDate;
                }
                if (oMap.endDate != undefined) {
                    this.endDate = oMap.endDate;
                }
            }
        } // constructor
    get startDate() {
        return (this._start != undefined) ? this._start : null;
    }
    set startDate(d) {
       //this._start = BaseItem.check_date(d);
       this._start = d;
    }
    get has_startDate() {
        return (this.startDate != null);
    }
    get endDate() {
        return (this._end != undefined) ? this._end : null;
    }
    set endDate(d) {
        //this._end = BaseItem.check_date(d);
       this._end = d;
    }
    get has_endDate() {
        return (this.endDate != null);
    }
    to_insert_map(oMap) {
            super.to_insert_map(oMap);
            if (this.has_startDate) {
                oMap.startDate = this.startDate;
            }
            if (this.has_endDate) {
                oMap.endDate = this.endDate;
            }
        } // to_insert_map
    get is_storeable() {
        if ((!super.is_storeable) || (!this.startDate) || (!this.has_endDate)){
            return false;
        }
        let t1 = Date.parse(this.startDate.toString());
        let t2 = Date.parse(this.endDate.toString());
        if (isNaN(t1) || isNaN(t2)){
            return false;
        }
        return (t1 <= t2);
    }

} // class IntervakItem