// uniteviewmodel.js
import {Unite} from '../domain/unite';
import {DepartementSigleNameViewModel} from './depsiglenameviewmodel';
//
export class UniteViewModel extends DepartementSigleNameViewModel {
   
    constructor(dataservice) {
            super(dataservice, new Unite(), 'Unités');
        } // constructor
    update_menu() {
        let mm = [];
        let item = this.current;
        if ((item !== undefined) && (item !== null) && item.has_id) {
            let id = item.id;
             mm.push({
                refer: '#deps',
                title: 'Départements',
                desc: 'Départements'
            });
            mm.push({
                refer: '#matieres/' + id,
                title: 'Matières',
                desc: 'Matières'
            });
        } // item
        this.menu = mm;
    }
} // class UniteViewModel
