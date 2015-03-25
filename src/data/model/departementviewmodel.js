// departementviewmodel.js
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
export class DepartementViewModel extends SigleNameViewModel {
   
    constructor(dataservice) {
            super(dataservice, new Departement(), 'Départements');
        } // constructor
    update_menu() {
        let mm = [];
        let item = this.current;
        if ((item !== undefined) && (item !== null) && item.has_id) {
            let id = item.id;
            mm.push({
                refer: '#groupes/' + id,
                title: 'Groupes',
                desc: 'Groupes'
            });
            mm.push({
                refer: '#unites/' + id,
                title: 'Unités',
                desc: 'Unités enseignement'
            });
            mm.push({
                refer: '#annees/' + id,
                title: 'Années',
                desc: 'Années universitaires'
            });
            mm.push({
                refer: '#profs/' + id,
                title: 'Enseignants',
                desc: 'Enseignants'
            });
            mm.push({
                refer: '#etuds/' + id,
                title: 'Etudiants',
                desc: 'Etudiants'
            });
        } // item
        this.menu = mm;
    }
} // class DepartementViewModel