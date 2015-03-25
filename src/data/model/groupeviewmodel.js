// groupeviewmodel.js
import {
    Groupe
}
from '../domain/groupe';
import {
    DepartementSigleNameViewModel
}
from './depsiglenameviewmodel';
//
export class GroupeViewModel extends DepartementSigleNameViewModel {

    constructor(dataservice) {
            super(dataservice, new Groupe(), 'Groupes');
        } // constructor
    update_menu() {
        let mm = [];
        mm.push({
            refer: '#deps',
            title: 'Départements',
            desc: 'Départements'
        });
        this.menu = mm;
    }
} // class GroupeViewModel