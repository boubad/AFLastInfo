// personviewmodel.js
import {
    Departement
}
from '../domain/departement';
//
import {
    DepartementPagedViewModel
}
from './deppagedviewmodel';
//
export class PersonViewModel extends DepartementPagedViewModel {
    constructor(dataService, model, personModel, baseTitle) {
            super(dataService, model, baseTitle);
            this.personModel = personModel;
            this.person = this.dataService.create_item({
                type: personModel.type
            });
            this.current = this.dataService.create_item({
                type: model.type
            });
        } // constructor
    get current() {
        return super.current;
    }
    set current(v) {
        super.current = v;
        this.person = this.dataService.create_item({
            type: this.personModel.type
        });
        if ((this.current != null) && (this.current.personid !== undefined) &&
            (this.current.personid != null)) {
            let id = this.current.personid;
            let xmodel = this.dataService.create_item({
                _id: id,
                type: this.personModel.type
            });
            let self = this;
            this.dataService.get_one_item(xmodel).then((p) => {
                self.person = p;
            }).catch((err) => {
                self.internal_set_error(err);
            })
        }
    }
    get username() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.username !== undefined)) ? this.person.username : null;
    }
    set username(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.username = s;
        }
    }
    get has_username() {
        return (this.username != null) && (this.username.trim().length > 0);
    }
    get firstname() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.firstname !== undefined)) ? this.person.firstname : null;
    }
    set firstname(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.firstname = s;
            if (this.current !== null) {
                this.current.fullname = this.person.fullname;
            }
        }
    }
    get has_firstname() {
        return (this.firstname != null) && (this.firstname.trim().length > 0);
    }
    get lastname() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.lastname !== undefined)) ? this.person.lastname : null;
    }
    set lastname(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.lastname = s;
            if (this.current !== null) {
                this.current.fullname = this.person.fullname;
            }
        }
    }
    get has_lastname() {
        return (this.lastname != null) && (this.lastname.trim().length > 0);
    }
    get email() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.email !== undefined)) ? this.person.email : null;
    }
    set email(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.email = s;
        }
    }
    get phone() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.phone !== undefined)) ? this.person.phone : null;
    }
    set phone(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.phone = s;
        }
    }
    get description() {
        return ((this.person !== undefined) && (this.person !== null) &&
            (this.person.description !== undefined)) ? this.person.description : null;
    }
    set description(s) {
        if ((this.person !== undefined) && (this.person !== null)) {
            this.person.description = s;
        }
    }
    get canAdd() {
        return (super.canAdd && (this.departementid != null));
    }
    addNew() {
            super.addNew();
            this.person = this.dataService.create_item({
                type: this.personModel.type
            });
        } // addNew
    get canSave() {
        return (this.has_departementid && this.has_username &&
            this.has_firstname && this.has_lastname);
    }
    save() {
            let data = this.current;
            let px = this.person;
            if ((data === undefined) || (data === null) ||
                (px === undefined) || (px === null)) {
                return;
            }
            if ((!px.is_storeable) || (data.departementid === null)) {
                return;
            }
            let dataService = this.dataService;
            let self = this;
            if (px.id !== null) {
                dataService.maintains_item(px).then((r) => {
                    self.info = 'Enregistrement modifié!';
                }, (err) => {
                    self._internal_set_error(err);
                });
            }
            else {
                px.reset_password();
                let user = px.username;
                let xmodel = this.dataService.create_item({
                    username: user,
                    type: this.personModel.type
                });
                dataService.get_one_item(xmodel).then((p) => {
                    if ((p !== undefined) && (p !== null) && (p.id !== null)) {
                        data.personid = p.id;
                        dataService.maintains_item(data).then((r) => {
                            self.refreshAll();
                        }, (err) => {
                            self._internal_set_error(err);
                        })
                    }
                    else {
                        dataService.maintains_item(px).then((x) => {
                            dataService.get_one_item(xmodel).then((p) => {
                                data.personid = p.id;
                                dataService.maintains_item(data).then((x) => {
                                    self.refreshAll();
                                }, (ex) => {
                                    self._internal_set_error(ex);
                                });
                            }, (err) => {
                                self._internal_set_error(err);
                            });
                        }, (err) => {
                            self._internal_set_error(err);
                        });
                    }
                });
            }
        } // save
} // class PersonViewModel
