// semestre.js
//
import {
    IntervallItem
}
from './intervalitem';
//
export class Semestre extends IntervallItem {
    constructor(oMap) {
        super(oMap);
        this._anneeid = null;
         if ((oMap != undefined) && (oMap != null)) {
      if (oMap.anneeid != undefined) {
        this.anneeid = oMap.anneeid;
      }
    }// oMap
    }
   get anneeid() {
    return (this._anneeid != undefined) ? this._anneeid : null;
  }
  set anneeid(s) {
    if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
      this._anneeid = s;
    } else {
      this._anneeid = null;
    }
  }
  get has_anneeid() {
    return (this.anneeid != null);
  }
  get is_storeable() {
   return (super.is_storeable && this.has_anneeid);
  }
  to_insert_map(oMap) {
    super.to_insert_map(oMap);
    if (this.has_anneeid) {
      oMap.anneeid = this.anneeid;
    }
  }// to_insert_map
  get type() {
    return 'semestre';
  }
  get collection_name() {
    return 'semestres';
  }
} // class Annee

