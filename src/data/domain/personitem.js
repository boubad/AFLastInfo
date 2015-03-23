// personitem.js
//
import {
    BaseItem
}
from './baseitem';
import {
    DescriptionItem
}
from './descriptionitem';
import {
    MyCrypto
}
from './mycrypto';
//
let cc = new MyCrypto();
//
export class PersonItem extends DescriptionItem {
    constructor(oMap) {
        super(oMap);
        this._user = null;
        this._pass = null;
        this._first = null;
        this._last = null;
        this._email = null;
        this._phone = null;
        this._roles = null;
        this._deps = null;
        this._annees = null;
        this._semestres = null;
        this._unites = null;
        this._matieres = null;
        this._groupes = null;
        this._infos = null;
        if ((oMap !== undefined) && (oMap !== null)) {
            if (oMap.username !== undefined) {
                this.username = oMap.username;
            }
            if (oMap.password !== undefined) {
                this.password = oMap.password;
            }
            if (oMap.firstname !== undefined) {
                this.firstname = oMap.firstname;
            }
            if (oMap.lastname !== undefined) {
                this.lastname = oMap.lastname;
            }
            if (oMap.email !== undefined) {
                this.email = oMap.email;
            }
            if (oMap.phone !== undefined) {
                this.phone = oMap.phone;
            }
            if (oMap.departementids !== undefined) {
                this.departementids = oMap.departementids;
            } //
            if (oMap.infoids !== undefined) {
                this.infoids = oMap.infoids;
            }
            if (oMap.roles !== undefined) {
                this.roles = oMap.roles;
            } //
            if (oMap.anneeids !== undefined) {
                this.anneeids = oMap.anneeids;
            } //
            if (oMap.semestreids !== undefined) {
                this.semestreids = oMap.semestreids;
            } //
            if (oMap.uniteids !== undefined) {
                this.uniteids = oMap.uniteids;
            } //
            if (oMap.matiereids !== undefined) {
                this.matiereids = oMap.matiereids;
            } //
            if (oMap.groupeids !== undefined) {
                this.groupeids = oMap.groupeids;
            } //
        } // oMap
    } // constructor

    //
    get departementids() {
        return (this._deps !== undefined) ? this._deps : null;
    }
    set departementids(s) {
        this._deps = (s !== undefined) ? s : null;
    }
    get has_departementids() {
        return ((this._deps !== undefined) && (this._deps !== null) && (this._deps.length > 0));
    }
    add_departementid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._deps === undefined) || (this._deps === null)) {
                this._deps = [];
            }
            BaseItem.array_add(this._deps, id);
        }
    }
    remove_departementid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._deps !== undefined) && (this._deps !== null) && (this._deps.length > 0)) {
                BaseItem.array_remove(this._deps, id);
            }
        }
    }
    //
    get groupeids() {
        return (this._groupes !== undefined) ? this._groupes : null;
    }
    set groupeids(s) {
        this._groupes = (s !== undefined) ? s : null;
    }
    get has_groupeids() {
        return ((this._groupes !== undefined) && (this._groupes !== null) && (this._groupes.length > 0));
    }
    add_groupeid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._groupes === undefined) || (this._groupes === null)) {
                this._groupes = [];
            }
            BaseItem.array_add(this._groupes, id);
        }
    }
    remove_groupeid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._groupes !== undefined) && (this._groupes !== null) && (this._groupes.length > 0)) {
                BaseItem.array_remove(this._groupes, id);
            }
        }
    }
    //
    get anneeids() {
        return (this._annees !== undefined) ? this._annees : null;
    }
    set anneeids(s) {
        this._annees = (s !== undefined) ? s : null;
    }
    get has_anneeids() {
        return ((this._annees !== undefined) && (this._annees !== null) && (this._annees.length > 0));
    }
    add_anneeid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._annees === undefined) || (this._annees === null)) {
                this._annees = [];
            }
            BaseItem.array_add(this._annees, id);
        }
    }
    remove_anneeid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._annees !== undefined) && (this._annees !== null) && (this._annees.length > 0)) {
                BaseItem.array_remove(this._annees, id);
            }
        }
    }
    //
    get semestreids() {
        return (this._semestres !== undefined) ? this._semestres : null;
    }
    set semestreids(s) {
        this._semestres = (s !== undefined) ? s : null;
    }
    get has_semestreids() {
        return ((this._semestres !== undefined) && (this._semestres !== null) && (this._semestres.length > 0));
    }
    add_semestreid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._semestres === undefined) || (this._semestres === null)) {
                this._semestres = [];
            }
            BaseItem.array_add(this._semestres, id);
        }
    }
    remove_semestreid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._semestres !== undefined) && (this._semestres !== null) && (this._semestres.length > 0)) {
                BaseItem.array_remove(this._semestres, id);
            }
        }
    }
    //
    get uniteids() {
        return (this._unites !== undefined) ? this._unites : null;
    }
    set uniteids(s) {
        this._unites = (s !== undefined) ? s : null;
    }
    get has_uniteids() {
        return ((this._unites !== undefined) && (this._unites !== null) && (this._unites.length > 0));
    }
    add_uniteid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._unites === undefined) || (this._unites === null)) {
                this._unites = [];
            }
            BaseItem.array_add(this._unites, id);
        }
    }
    remove_uniteid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._unites !== undefined) && (this._unites !== null) && (this._unites.length > 0)) {
                BaseItem.array_remove(this._unites, id);
            }
        }
    }
    //
    get matiereids() {
        return (this._matieres !== undefined) ? this._matieres : null;
    }
    set matiereids(s) {
        this._matieres = (s !== undefined) ? s : null;
    }
    get has_matiereids() {
        return ((this._matieres !== undefined) && (this._matieres !== null) && (this._matieres.length > 0));
    }
    add_matiereid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._matieres === undefined) || (this._matieres === null)) {
                this._matieres = [];
            }
            BaseItem.array_add(this._matieres, id);
        }
    }
    remove_matiereid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._matieres !== undefined) && (this._matieres !== null) && (this._matieres.length > 0)) {
                BaseItem.array_remove(this._matieres, id);
            }
        }
    }
    //
    get infoids() {
        return (this._infos !== undefined) ? this._infos : null;
    }
    set infoids(s) {
        this._infos = (s !== undefined) ? s : null;
    }
    get has_infoids() {
        return ((this._infos !== undefined) && (this._infos !== null) && (this._infos.length > 0));
    }
    add_infoid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._infos === undefined) || (this._infos === null)) {
                this._infos = [];
            }
            BaseItem.array_add(this._infos, id);
        }
    }
    remove_infoid(id) {
        if ((id !== undefined) && (id !== null) && (id.toString().trim().length > 0)) {
            if ((this._infos !== undefined) && (this._infos !== null) && (this._infos.length > 0)) {
                BaseItem.array_remove(this._infos, id);
            }
        }
    }
    //
    get roles() {
        return (this._roles !== undefined) ? this._roles : null;
    }
    set roles(s) {
        this._roles = (s !== undefined) ? s : null;
    }
    get has_roles() {
        return ((this._roles !== undefined) && (this._roles !== null) && (this._roles.length > 0));
    }
    add_role(id) {
        if ((id !== undefined) && (id !== null) && (id.trim().length > 0)) {
            if ((this._roles === undefined) || (this._roles === null)) {
                this._roles = [];
            }
            BaseItem.array_add(this._roles, id);
        }
    }
    remove_role(id) {
        if ((id !== undefined) && (id !== null) && (id.trim().length > 0)) {
            if ((this._roles !== undefined) && (this._roles !== null) && (this._roles.length > 0)) {
                BaseItem.array_remove(this._roles, id);
            }
        }
    }
    //
    reset_password() {
        if (this.has_username) {
            this.password = cc.md5(this.username);
        } else {
            this.password = null;
        }
    }
    change_password(ct) {
        if ((ct === undefined) || (ct === null)) {
            this.password = null;
        } else {
            let v = null;
            let x = ct.trim();
            if (x.length > 0) {
                v = cc.md5(ct);
            }
            this.password = v;
        }
    }
    check_password(ct) {
        if ((ct === undefined) || (ct === null)) {
            if (this.has_password) {
                return false;
            }
        }
        let x = ct.trim();
        if (x.length < 1) {
            if (this.has_password) {
                return false;
            }
        }
        if (!this.has_password) {
            return false;
        }
        let v = cc.md5(x);
        return (this.password == v);
    } // check_password
    //
    get collection_name() {
        return "persons";
    }
    get type() {
        return "person";
    }
    //
    get username() {
        return (this._user !== undefined) ? this._user : null;
    }
    set username(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._user = s.trim().toLowerCase();
        } else {
            this._user = null;
        }
    }
    get has_username() {
        return (this.username !== null);
    }
    //
    get lastname() {
        return (this._last !== undefined) ? this._last : null;
    }
    set lastname(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._last = s.trim().toUpperCase();
        } else {
            this._last = null;
        }
    }
    get has_lastname() {
        return (this.lastname !== null);
    }
    //
    get firstname() {
        return (this._first !== undefined) ? this._first : null;
    }
    set firstname(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            let ss = s.trim();
            let n = ss.length;
            if (n > 1) {
                this._first = ss.substr(0, 1).toUpperCase() + ss.substr(1, n - 1).toLowerCase();
            } else {
                this._first = ss.toUpperCase();
            }
            this._last = s.trim().toUpperCase();
        } else {
            this._first = null;
        }
    }
    get has_firstname() {
        return (this.firstname !== null);
    }
    //
    get fullname() {
        let s = '';
        if (this.has_lastname) {
            s = this.lastname;
        }
        if (this.has_firstname) {
            s = s + ' ' + this.firstname;
        }
        s = s.trim();
        return (s.length > 0) ? s : null;
    } // fullname
    get has_fullname() {
        return (this.fullname !== null);
    }
    //
    get password() {
        return (this._pass !== undefined) ? this._pass : null;
    }
    set password(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._pass = s.trim();
        } else {
            this._pass = null;
        }
    }
    get has_password() {
        return (this.password !== null);
    }
    //
    get email() {
        return (this._email !== undefined) ? this._email : null;
    }
    set email(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._email = s.trim();
        } else {
            this._email = null;
        }
    }
    get has_email() {
        return (this.email !== null);
    }
    get phone() {
        return (this._phone !== undefined) ? this._phone : null;
    }
    set phone(s) {
        if ((s !== undefined) && (s !== null) && (s.trim().length > 0)) {
            this._phone = s.trim();
        } else {
            this._phone = null;
        }
    }
    get has_phone() {
        return (this.phone !== null);
    }
    //
    to_insert_map(oMap) {
        super.to_insert_map(oMap);
        if (this.has_username) {
            oMap.username = this.username;
        }
        if (this.has_password) {
            oMap.password = this.password;
        }
        if (this.has_firstname) {
            oMap.firstname = this.firstname;
        }
        if (this.has_lastname) {
            oMap.lastname = this.lastname;
        }
        if (this.has_email) {
            oMap.email = this.email;
        }
        if (this.has_phone) {
            oMap.phone = this.phone;
        }
        if (this.has_roles) {
            oMap.roles = this.roles;
        }
        if (this.has_departementids) {
            oMap.departementids = this.departementids;
        }
        if (this.has_uniteids) {
            oMap.uniteids = this.uniteids;
        }
        if (this.has_matiereids) {
            oMap.matiereids = this.matiereids;
        }
        if (this.has_anneeids) {
            oMap.anneeids = this.anneeids;
        }
        if (this.has_semestreids) {
            oMap.semestreids = this.semestreids;
        }
        if (this.has_infoids) {
            oMap.infoids = this.infoids;
        }
        if (this.has_groupeids) {
            oMap.groupeids = this.groupeids;
        }
    } // to_insert_map
    to_fetch_map(oMap) {
        super.to_insert_map(oMap);
        if (this.has_id) {
            oMap._id = this.id;
        }
        if (this.has_rev) {
            oMap._rev = this.rev;
        }
        if (this.has_username) {
            oMap.username = this.username;
        }
        if (this.has_password) {
            oMap.password = this.password;
        }
        if (this.has_firstname) {
            oMap.firstname = this.firstname;
        }
        if (this.has_lastname) {
            oMap.lastname = this.lastname;
        }
        if (this.has_email) {
            oMap.email = this.email;
        }
        if (this.has_phone) {
            oMap.phone = this.phone;
        }
    }
    get is_storeable() {
        return (super.is_storeable && this.has_username && this.has_lastname && this.has_firstname);
    }
    hasrole(r) {
        return BaseItem.array_contains(this._roles, r);
    } // hasrole_
    get is_admin() {
        return (this.hasrole('super') || this.hasrole('admin'));
    }
    get is_oper() {
        return this.hasrole('oper');
    }
    get is_prof() {
        return this.hasrole('prof');
    }
    get is_etud() {
        return this.hasrole('etud');
    }
    get is_reader() {
        return this.hasrole('reader');
    }
    get is_super() {
        return this.hasrole('super');
    }
} // class PersonItem