// anneeviewmodel.js
import {Annee} from '../domain/annee';
import {IntervallViewModel} from './intervallviewmodel';
//
export class AnneeViewModel extends IntervallViewModel {
   
    constructor(dataservice) {
            super(dataservice, new Annee(), 'Années');
        } // constructor
    update_menu() {
        let mm = [];
         mm.push({
                refer: '#deps',
                title: 'Départements',
                desc: 'Départements'
            });
        let item = this.current;
        if ((item !== undefined) && (item !== null) && item.has_id) {
            let id = item.id;
            mm.push({
                refer: '#semestres/' + id,
                title: 'Semestres',
                desc: 'Semestres'
            });
        } // item
        this.menu = mm;
    }
} // class AnneeViewModel
