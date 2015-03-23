System.register(["./baseitem", "./descriptionitem", "./mycrypto"], function (_export) {
    var BaseItem, DescriptionItem, MyCrypto, _createClass, _get, _inherits, _classCallCheck, cc, PersonItem;

    return {
        setters: [function (_baseitem) {
            BaseItem = _baseitem.BaseItem;
        }, function (_descriptionitem) {
            DescriptionItem = _descriptionitem.DescriptionItem;
        }, function (_mycrypto) {
            MyCrypto = _mycrypto.MyCrypto;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            cc = new MyCrypto();

            //
            PersonItem = _export("PersonItem", (function (_DescriptionItem) {
                function PersonItem(oMap) {
                    _classCallCheck(this, PersonItem);

                    _get(Object.getPrototypeOf(PersonItem.prototype), "constructor", this).call(this, oMap);
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
                    if (oMap !== undefined && oMap !== null) {
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
                }

                _inherits(PersonItem, _DescriptionItem);

                _createClass(PersonItem, {
                    departementids: { // constructor

                        //

                        get: function () {
                            return this._deps !== undefined ? this._deps : null;
                        },
                        set: function (s) {
                            this._deps = s !== undefined ? s : null;
                        }
                    },
                    has_departementids: {
                        get: function () {
                            return this._deps !== undefined && this._deps !== null && this._deps.length > 0;
                        }
                    },
                    add_departementid: {
                        value: function add_departementid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._deps === undefined || this._deps === null) {
                                    this._deps = [];
                                }
                                BaseItem.array_add(this._deps, id);
                            }
                        }
                    },
                    remove_departementid: {
                        value: function remove_departementid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._deps !== undefined && this._deps !== null && this._deps.length > 0) {
                                    BaseItem.array_remove(this._deps, id);
                                }
                            }
                        }
                    },
                    groupeids: {
                        //

                        get: function () {
                            return this._groupes !== undefined ? this._groupes : null;
                        },
                        set: function (s) {
                            this._groupes = s !== undefined ? s : null;
                        }
                    },
                    has_groupeids: {
                        get: function () {
                            return this._groupes !== undefined && this._groupes !== null && this._groupes.length > 0;
                        }
                    },
                    add_groupeid: {
                        value: function add_groupeid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._groupes === undefined || this._groupes === null) {
                                    this._groupes = [];
                                }
                                BaseItem.array_add(this._groupes, id);
                            }
                        }
                    },
                    remove_groupeid: {
                        value: function remove_groupeid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._groupes !== undefined && this._groupes !== null && this._groupes.length > 0) {
                                    BaseItem.array_remove(this._groupes, id);
                                }
                            }
                        }
                    },
                    anneeids: {
                        //

                        get: function () {
                            return this._annees !== undefined ? this._annees : null;
                        },
                        set: function (s) {
                            this._annees = s !== undefined ? s : null;
                        }
                    },
                    has_anneeids: {
                        get: function () {
                            return this._annees !== undefined && this._annees !== null && this._annees.length > 0;
                        }
                    },
                    add_anneeid: {
                        value: function add_anneeid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._annees === undefined || this._annees === null) {
                                    this._annees = [];
                                }
                                BaseItem.array_add(this._annees, id);
                            }
                        }
                    },
                    remove_anneeid: {
                        value: function remove_anneeid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._annees !== undefined && this._annees !== null && this._annees.length > 0) {
                                    BaseItem.array_remove(this._annees, id);
                                }
                            }
                        }
                    },
                    semestreids: {
                        //

                        get: function () {
                            return this._semestres !== undefined ? this._semestres : null;
                        },
                        set: function (s) {
                            this._semestres = s !== undefined ? s : null;
                        }
                    },
                    has_semestreids: {
                        get: function () {
                            return this._semestres !== undefined && this._semestres !== null && this._semestres.length > 0;
                        }
                    },
                    add_semestreid: {
                        value: function add_semestreid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._semestres === undefined || this._semestres === null) {
                                    this._semestres = [];
                                }
                                BaseItem.array_add(this._semestres, id);
                            }
                        }
                    },
                    remove_semestreid: {
                        value: function remove_semestreid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._semestres !== undefined && this._semestres !== null && this._semestres.length > 0) {
                                    BaseItem.array_remove(this._semestres, id);
                                }
                            }
                        }
                    },
                    uniteids: {
                        //

                        get: function () {
                            return this._unites !== undefined ? this._unites : null;
                        },
                        set: function (s) {
                            this._unites = s !== undefined ? s : null;
                        }
                    },
                    has_uniteids: {
                        get: function () {
                            return this._unites !== undefined && this._unites !== null && this._unites.length > 0;
                        }
                    },
                    add_uniteid: {
                        value: function add_uniteid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._unites === undefined || this._unites === null) {
                                    this._unites = [];
                                }
                                BaseItem.array_add(this._unites, id);
                            }
                        }
                    },
                    remove_uniteid: {
                        value: function remove_uniteid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._unites !== undefined && this._unites !== null && this._unites.length > 0) {
                                    BaseItem.array_remove(this._unites, id);
                                }
                            }
                        }
                    },
                    matiereids: {
                        //

                        get: function () {
                            return this._matieres !== undefined ? this._matieres : null;
                        },
                        set: function (s) {
                            this._matieres = s !== undefined ? s : null;
                        }
                    },
                    has_matiereids: {
                        get: function () {
                            return this._matieres !== undefined && this._matieres !== null && this._matieres.length > 0;
                        }
                    },
                    add_matiereid: {
                        value: function add_matiereid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._matieres === undefined || this._matieres === null) {
                                    this._matieres = [];
                                }
                                BaseItem.array_add(this._matieres, id);
                            }
                        }
                    },
                    remove_matiereid: {
                        value: function remove_matiereid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._matieres !== undefined && this._matieres !== null && this._matieres.length > 0) {
                                    BaseItem.array_remove(this._matieres, id);
                                }
                            }
                        }
                    },
                    infoids: {
                        //

                        get: function () {
                            return this._infos !== undefined ? this._infos : null;
                        },
                        set: function (s) {
                            this._infos = s !== undefined ? s : null;
                        }
                    },
                    has_infoids: {
                        get: function () {
                            return this._infos !== undefined && this._infos !== null && this._infos.length > 0;
                        }
                    },
                    add_infoid: {
                        value: function add_infoid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._infos === undefined || this._infos === null) {
                                    this._infos = [];
                                }
                                BaseItem.array_add(this._infos, id);
                            }
                        }
                    },
                    remove_infoid: {
                        value: function remove_infoid(id) {
                            if (id !== undefined && id !== null && id.toString().trim().length > 0) {
                                if (this._infos !== undefined && this._infos !== null && this._infos.length > 0) {
                                    BaseItem.array_remove(this._infos, id);
                                }
                            }
                        }
                    },
                    roles: {
                        //

                        get: function () {
                            return this._roles !== undefined ? this._roles : null;
                        },
                        set: function (s) {
                            this._roles = s !== undefined ? s : null;
                        }
                    },
                    has_roles: {
                        get: function () {
                            return this._roles !== undefined && this._roles !== null && this._roles.length > 0;
                        }
                    },
                    add_role: {
                        value: function add_role(id) {
                            if (id !== undefined && id !== null && id.trim().length > 0) {
                                if (this._roles === undefined || this._roles === null) {
                                    this._roles = [];
                                }
                                BaseItem.array_add(this._roles, id);
                            }
                        }
                    },
                    remove_role: {
                        value: function remove_role(id) {
                            if (id !== undefined && id !== null && id.trim().length > 0) {
                                if (this._roles !== undefined && this._roles !== null && this._roles.length > 0) {
                                    BaseItem.array_remove(this._roles, id);
                                }
                            }
                        }
                    },
                    reset_password: {
                        //

                        value: function reset_password() {
                            if (this.has_username) {
                                this.password = cc.md5(this.username);
                            } else {
                                this.password = null;
                            }
                        }
                    },
                    change_password: {
                        value: function change_password(ct) {
                            if (ct === undefined || ct === null) {
                                this.password = null;
                            } else {
                                var v = null;
                                var x = ct.trim();
                                if (x.length > 0) {
                                    v = cc.md5(ct);
                                }
                                this.password = v;
                            }
                        }
                    },
                    check_password: {
                        value: function check_password(ct) {
                            if (ct === undefined || ct === null) {
                                if (this.has_password) {
                                    return false;
                                }
                            }
                            var x = ct.trim();
                            if (x.length < 1) {
                                if (this.has_password) {
                                    return false;
                                }
                            }
                            if (!this.has_password) {
                                return false;
                            }
                            var v = cc.md5(x);
                            return this.password == v;
                        }
                    },
                    collection_name: { // check_password
                        //

                        get: function () {
                            return "persons";
                        }
                    },
                    type: {
                        get: function () {
                            return "person";
                        }
                    },
                    username: {
                        //

                        get: function () {
                            return this._user !== undefined ? this._user : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.trim().length > 0) {
                                this._user = s.trim().toLowerCase();
                            } else {
                                this._user = null;
                            }
                        }
                    },
                    has_username: {
                        get: function () {
                            return this.username !== null;
                        }
                    },
                    lastname: {
                        //

                        get: function () {
                            return this._last !== undefined ? this._last : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.trim().length > 0) {
                                this._last = s.trim().toUpperCase();
                            } else {
                                this._last = null;
                            }
                        }
                    },
                    has_lastname: {
                        get: function () {
                            return this.lastname !== null;
                        }
                    },
                    firstname: {
                        //

                        get: function () {
                            return this._first !== undefined ? this._first : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.trim().length > 0) {
                                var ss = s.trim();
                                var n = ss.length;
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
                    },
                    has_firstname: {
                        get: function () {
                            return this.firstname !== null;
                        }
                    },
                    fullname: {
                        //

                        get: function () {
                            var s = "";
                            if (this.has_lastname) {
                                s = this.lastname;
                            }
                            if (this.has_firstname) {
                                s = s + " " + this.firstname;
                            }
                            s = s.trim();
                            return s.length > 0 ? s : null;
                        }
                    },
                    has_fullname: { // fullname

                        get: function () {
                            return this.fullname !== null;
                        }
                    },
                    password: {
                        //

                        get: function () {
                            return this._pass !== undefined ? this._pass : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.trim().length > 0) {
                                this._pass = s.trim();
                            } else {
                                this._pass = null;
                            }
                        }
                    },
                    has_password: {
                        get: function () {
                            return this.password !== null;
                        }
                    },
                    email: {
                        //

                        get: function () {
                            return this._email !== undefined ? this._email : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.trim().length > 0) {
                                this._email = s.trim();
                            } else {
                                this._email = null;
                            }
                        }
                    },
                    has_email: {
                        get: function () {
                            return this.email !== null;
                        }
                    },
                    phone: {
                        get: function () {
                            return this._phone !== undefined ? this._phone : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.trim().length > 0) {
                                this._phone = s.trim();
                            } else {
                                this._phone = null;
                            }
                        }
                    },
                    has_phone: {
                        get: function () {
                            return this.phone !== null;
                        }
                    },
                    to_insert_map: {
                        //

                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(PersonItem.prototype), "to_insert_map", this).call(this, oMap);
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
                        }
                    },
                    to_fetch_map: { // to_insert_map

                        value: function to_fetch_map(oMap) {
                            _get(Object.getPrototypeOf(PersonItem.prototype), "to_insert_map", this).call(this, oMap);
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
                    },
                    is_storeable: {
                        get: function () {
                            return _get(Object.getPrototypeOf(PersonItem.prototype), "is_storeable", this) && this.has_username && this.has_lastname && this.has_firstname;
                        }
                    },
                    hasrole: {
                        value: function hasrole(r) {
                            return BaseItem.array_contains(this._roles, r);
                        }
                    },
                    is_admin: { // hasrole_

                        get: function () {
                            return this.hasrole("super") || this.hasrole("admin");
                        }
                    },
                    is_oper: {
                        get: function () {
                            return this.hasrole("oper");
                        }
                    },
                    is_prof: {
                        get: function () {
                            return this.hasrole("prof");
                        }
                    },
                    is_etud: {
                        get: function () {
                            return this.hasrole("etud");
                        }
                    },
                    is_reader: {
                        get: function () {
                            return this.hasrole("reader");
                        }
                    },
                    is_super: {
                        get: function () {
                            return this.hasrole("super");
                        }
                    }
                });

                return PersonItem;
            })(DescriptionItem));
        }
    };
});
// personitem.js
//
// class PersonItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL3BlcnNvbml0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUdJLFFBQVEsRUFJUixlQUFlLEVBSWYsUUFBUSxrREFJUixFQUFFLEVBRU8sVUFBVTs7OztBQWRuQixvQkFBUSxhQUFSLFFBQVE7O0FBSVIsMkJBQWUsb0JBQWYsZUFBZTs7QUFJZixvQkFBUSxhQUFSLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FBSVIsY0FBRSxHQUFHLElBQUksUUFBUSxFQUFFOzs7QUFFVixzQkFBVTtBQUNSLHlCQURGLFVBQVUsQ0FDUCxJQUFJLEVBQUU7MENBRFQsVUFBVTs7QUFFZiwrQ0FGSyxVQUFVLDZDQUVULElBQUksRUFBRTtBQUNaLHdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQix3QkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsd0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLHdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQix3QkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsd0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLHdCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQix3QkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsd0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLHdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2Qix3QkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDcEIsd0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLHdCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQix3QkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsd0JBQUksQUFBQyxJQUFJLEtBQUssU0FBUyxJQUFNLElBQUksS0FBSyxJQUFJLEFB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QUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDbkIsb0NBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzs2QkFDakM7QUFDRCxnQ0FBSSxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3BCLG9DQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7NkJBQ25DO0FBQ0QsZ0NBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNuQixvQ0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOzZCQUNqQztBQUNELGdDQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDaEIsb0NBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs2QkFDM0I7QUFDRCxnQ0FBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2hCLG9DQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7NkJBQzNCO3lCQUNKOztBQUNHLGdDQUFZOzZCQUFBLFlBQUc7QUFDZixtQ0FBUSwyQkF2ZUgsVUFBVSxzQ0F1ZWUsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUU7eUJBQy9GOztBQUNELDJCQUFPOytCQUFBLGlCQUFDLENBQUMsRUFBRTtBQUNQLG1DQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDbEQ7O0FBQ0csNEJBQVE7OzZCQUFBLFlBQUc7QUFDWCxtQ0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUU7eUJBQzNEOztBQUNHLDJCQUFPOzZCQUFBLFlBQUc7QUFDVixtQ0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUMvQjs7QUFDRywyQkFBTzs2QkFBQSxZQUFHO0FBQ1YsbUNBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDL0I7O0FBQ0csMkJBQU87NkJBQUEsWUFBRztBQUNWLG1DQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQy9COztBQUNHLDZCQUFTOzZCQUFBLFlBQUc7QUFDWixtQ0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUNqQzs7QUFDRyw0QkFBUTs2QkFBQSxZQUFHO0FBQ1gsbUNBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDaEM7Ozs7dUJBN2ZRLFVBQVU7ZUFBUyxlQUFlIiwiZmlsZSI6ImRhdGEvZG9tYWluL3BlcnNvbml0ZW0uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==