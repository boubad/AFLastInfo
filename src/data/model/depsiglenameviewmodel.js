//depsiglenameviewmodel.js
//
import {
    Departement
}
from '../domain/departement';
import {
    SigleNameViewModel
}
from './siglenameviewmodel';
//
export class DepartementSigleNameViewModel extends SigleNameViewModel {
    constructor(dataService, model, baseTitle) {
            super(dataService, model, baseTitle);
            this._dep = new Departement();
        } // constructor
    get departement() {
        return ((this._dep !== undefined) && (this._dep !== null) &&
            this._dep.has_id) ? this._dep : null;
    }
    set departement(d) {
        this._dep = ((d !== undefined) && (d !== null) && d.has_id) ? d : null;
    }
    get departementid() {
        return (this.departement !== null) ? this.departement.id : null;
    }
    set departementid(id) {
        let vid = ((id !== undefined) && (id !== null) &&
            (id.toString().trim().length > 0)) ? id : null;
        this.item_model.departementid = vid;
        if (vid !== null) {
            let self = this;
            this.dataService.get_one_item(new Departement({
                _id: vid
            })).then((d) => {
                self.departement = d;
                self.update_title();
                self.refreshAll();
            });
        } else {
            this.departement = null;
            self.update_title();
            self.refreshAll();
        }
    }
    update_title() {
            let s = '';
            if ((this.baseTitle !== undefined) && (this.baseTitle !== null)) {
                s = this.baseTitle.trim();
            }
            let d = this.departement;
            if (d !== null) {
                s = s + " : " + d.name;
            }
            this.title = s;
        } // update_title

    //
    create_item() {
        return this.dataService.create_item({
            type: this.item_model.type,
            departementid: this.departementid
        });
    }
} // class DepartementSigleNameViewModel
