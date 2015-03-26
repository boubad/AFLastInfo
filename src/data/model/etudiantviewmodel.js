// etudiantviewmodel.js
import {Etudiant} from '../domain/etudiant';
import {EtudPerson} from '../domain/etudperson';
import {PersonViewModel} from './personviewmodel';
//
export class EtudiantViewModel extends PersonViewModel {
   
    constructor(dataservice) {
            super(dataservice, new Etudiant(), new EtudPerson(), 'Etudiants');
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
    get dossier() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.dossier !== undefined)) ? this.person.dossier : null;
    }
    set dossier(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.dossier = s;
        }
    }
    get birthDate() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.dossier !== undefined)) ? this.person.birthDate : null;
    }
    set birthDate(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.birthDate = s;
        }
    }
    get sexe() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.sexe !== undefined)) ? this.person.sexe : null;
    }
    set sexe(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.sexe = s;
        }
    }
    get etablissement() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.etablissement !== undefined)) ? this.person.etablissement : null;
    }
    set etablissement(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.etablissement = s;
        }
    }
    get ville() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.ville !== undefined)) ? this.person.ville : null;
    }
    set ville(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.ville = s;
        }
    }
    get serieBac() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.serieBac !== undefined)) ? this.person.serieBac : null;
    }
    set serieBac(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.serieBac = s;
        }
    }
    get optionBac() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.optionBac !== undefined)) ? this.person.optionBac : null;
    }
    set optionBac(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.optionBac = s;
        }
    }
    get mentionBac() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.mentionBac !== undefined)) ? this.person.mentionBac : null;
    }
    set mentionBac(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.mentionBac = s;
        }
    }
    get etudesSuperieures() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.etudesSuperieures !== undefined)) ? this.person.etudesSuperieures : null;
    }
    set etudesSuperieures(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.etudesSuperieures = s;
        }
    }
} // EtudiantViewModel

