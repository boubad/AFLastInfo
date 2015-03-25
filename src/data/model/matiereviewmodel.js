//matiereviewmodel.js
//
import {
  Unite
}
from '../domain/unite';
import {
  Matiere
}
from '../domain/matiere';
import {
    DepartementSigleNameViewModel
}
from './depsiglenameviewmodel';
//
export class MatiereViewModel extends DepartementSigleNameViewModel {

    constructor(dataservice) {
            super(dataservice, new Matiere(), 'Matières');
            this._unite = new Unite();
            this.genres=['pratique','théorie','autre'];
        } // constructor
      get genre() {
        return ((this.current !== undefined) && (this.current !== null)) ? this.current.genre : null;
      }
      set genre(s) {
        if ((this.current !== undefined) && (this.current !== null)) {
          this.current.genre = s;
        }
      }
      get mat_module() {
        return ((this.current !== undefined) && (this.current !== null)) ? this.current.mat_module : null;
      }
      set mat_module(s) {
        if ((this.current !== undefined) && (this.current !== null)) {
          this.current.mat_module = s;
        }
      }
      get coefficient() {
        return ((this.current !== undefined) && (this.current !== null)) ? this.current.coefficient : null;
      }
      set coefficient(v) {
        if (this.current === null){
          return;
        }
        let vv = null;
        if ((v !== undefined) && (v !== null) && (this.current !== null)) {
          try {
            let x = parseFloat(v);
            if ((!isNaN(x)) && (x > 0)) {
               vv = x;
            }
          }
          catch (e) {}
        }
        this.current.coefficient = vv;
      }
      get ecs() {
        return ((this.current !== undefined) && (this.current !== null)) ? this.current.ecs : null;
      }
      set ecs(v) {
        if (this.current === null){
          return;
        }
        let vv = null;
        if ((v !== undefined) && (v !== null) && (this.current !== null)) {
          try {
            let x = parseFloat(v);
            if ((!isNaN(x)) && (x > 0)) {
               vv = x;
            }
          }
          catch (e) {}
        }
        this.current.ecs = vv;
      }
    get unite() {
        return ((this._unite !== undefined) && (this._unite !== null) &&
            this._unite.has_id) ? this._unite : null;
    }
    set unite(d) {
        this._unite = ((d !== undefined) && (d !== null) && d.has_id) ? d : null;
    }
    get uniteid() {
        return (this.unite !== null) ? this.unite.id : null;
    }
    set uniteid(id) {
        let vid = ((id !== undefined) && (id !== null) &&
            (id.toString().trim().length > 0)) ? id : null;
        this.item_model.uniteid = vid;
        if (vid !== null) {
            let self = this;
            this.dataService.get_one_item(new Unite({
                _id: vid
            })).then((d) => {
                self.unite = d;
                if ((d !== undefined) && (d !== null) && (d.departementid !== undefined)){
                    self.departementid = d.departementid;
                }
            });
        } else {
            this.unite = null;
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
            let u = this.unite;
            if (u !== null){
              s = s + ' / ' + u.sigle;
            }
            let d = this.departement;
            if (d !== null) {
                s = s + " / " + d.sigle;
            }
            this.title = s;
        } // update_title

} // class AnneeViewModel
