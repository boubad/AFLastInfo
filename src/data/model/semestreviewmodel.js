// semestreviewmodel.js
import {
    Annee
}
from '../domain/annee';
import {
    Semestre
}
from '../domain/semestre';
import {
    IntervallViewModel
}
from './intervallviewmodel';
//
export class SemestreViewModel extends IntervallViewModel {

    constructor(dataservice) {
            super(dataservice, new Semestre(), 'Semestres');
            this._annee = new Annee();
        } // constructor
    get annee() {
        return ((this._annee !== undefined) && (this._annee !== null) &&
            this._annee.has_id) ? this._annee : null;
    }
    set annee(d) {
        this._annee = ((d !== undefined) && (d !== null) && d.has_id) ? d : null;
    }
    get anneeid() {
        return (this.annee !== null) ? this.annee.id : null;
    }
    set anneeid(id) {
        let vid = ((id !== undefined) && (id !== null) &&
            (id.toString().trim().length > 0)) ? id : null;
        this.item_model.anneeid = vid;
        if (vid !== null) {
            let self = this;
            this.dataService.get_one_item(new Annee({
                _id: vid
            })).then((d) => {
                self.annee = d;
                if ((d !== undefined) && (d !== null) && (d.departementid !== undefined)){
                    self.departementid = d.departementid;
                }
            });
        } else {
            this.annee = null;
            self.update_title();
            self.refreshAll();
        }
    }
    update_menu() {
        let mm = [];
        mm.push({
            refer: '#deps',
            title: 'Départements',
            desc: 'Départements'
        });
        this.menu = mm;
    }
    update_title() {
            let s = '';
            if ((this.baseTitle !== undefined) && (this.baseTitle !== null)) {
                s = this.baseTitle.trim();
            }
            let u = this.annee;
            if (u !== null){
              s = s + ' / ' + u.sigle;
            }
            let d = this.departement;
            if (d !== null) {
                s = s + " / " + d.sigle;
            }
            this.title = s;
        } // update_title
    get canSave(){
        if (!super.canSave){
            return false;
        }
        let an = this.annee;
        if (an === null){
            return false;
        }
        let d01 = Date.parse(an.startDate.toString());
        let d02 = Date.parse(an.endDate.toString());
        let t1 = Date.parse(this.startDate.toString());
        let t2 = Date.parse(this.endDate.toString());
        return (t1 >= d01) && (t1 <= d02) && (t2 >= d01) && (t2 <= d02);
    }// canSave
} // class AnneeViewModel
