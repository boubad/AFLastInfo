//depsiglenameviewmodel.js
//
import {
    Departement
}
from '../domain/departement';
import {
    DepartementSigleNameViewModel
}
from './depsiglenameviewmodel';
//
export class IntervallViewModel extends DepartementSigleNameViewModel {
    constructor(dataService, model, baseTitle) {
            super(dataService, model, baseTitle);
        } // constructor
    get startDate() {
        return (this.current !== null) ? this.current.startDate : null;
    }
    set startDate(d) {
        if (this.current !== null){
            this.current.startDate = d;
        }
    }
    get endDate() {
        return (this.current !== null) ? this.current.endDate : null;
    }
    set endDate(d) {
        if (this.current !== null){
            this.current.endDate = d;
        }
    }
} // class IntervallViewModel