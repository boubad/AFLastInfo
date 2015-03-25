//etudevent.js
//
//
import {AffectationBase} from './affbase';
//
export class EtudEvent extends AffectationBase {
  //
   constructor(oMap) {
       super(oMap);
       this._groupeeventid = null;
       this._etudaffectationid = null;
       this._note = null;
       if ((oMap !== undefined) && (oMap !== null)) {}
       if (oMap.groupeeventid !== undefined) {
           this.groupeeventid = oMap.groupeeventid;
       }
       if (oMap.etudaffectationid !== undefined) {
           this.etudaffectationid = oMap.etudaffectationid;
       }
       if (oMap.note !== undefined) {
           this.note = oMap.note;
       }
   }
   get type() {
       return 'etudevent';
   } //
   get collection_name() {
       return 'etudevents';
   }
   //
   get note() {
       return (this._note !== undefined) ? this._note : null;
   }
   set note(s) {
       this._note = ((s !== undefined) && (s !== null)) ? s : null;
   }
   get has_note() {
       return (this.note !== null);
   }
   get etudaffectationid() {
       return (this._etudaffectationid !== undefined) ? this._etudaffectationid : null;
   }
   set etudaffectationid(s) {
       this._etudaffectationid = ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) ? s : null;
   }
   get has_etudaffectationid() {
       return (this.etudaffectationid !== null);
   }
   //
   get groupeeventid() {
       return (this._groupeeventid !== undefined) ? this._groupeeventid : null;
   }
   set groupeeventid(s) {
       this._groupeeventid = ((s !== undefined) && (s !== null) && (s.toString().trim().length > 0)) ? s : null;
   }
   get has_groupeeventid() {
       return (this.groupeeventid !== null);
   }
   //

   get is_storeable() {
       return (super.is_storeable &&
       this.has_etudaffectationid &&
       this.has_groupeeventid && this.has_etudiantid);
   }
   to_insert_map(oMap) {
       super.to_insert_map(oMap);
       if (this.has_note) {
           oMap.note = this.note;
       }
       if (this.has_groupeeventid) {
           oMap.groupeeventid = this.groupeeventid;
       }
       if (this.has_etudaffectationid) {
           oMap.etudaffectationid = this.etudaffectationid;
       }
   } // to_insert_map
}// class EtudEvent
