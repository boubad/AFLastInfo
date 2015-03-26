// enseignantviewmodel.js
import {Enseignant} from '../domain/enseignant';
import {PersonItem} from '../domain/personitem';
import {PersonViewModel} from './personviewmodel';
//
export class EnseignantViewModel extends PersonViewModel {
   
    constructor(dataservice) {
            super(dataservice, new Enseignant(), new PersonItem(), 'Enseignants');
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
} // EnseignantViewModel
