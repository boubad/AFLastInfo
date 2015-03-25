System.register(["./departementitem"], function (_export) {
    var DepartementItem, _createClass, _get, _inherits, _classCallCheck, AffectationBase;

    return {
        setters: [function (_departementitem) {
            DepartementItem = _departementitem.DepartementItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            AffectationBase = _export("AffectationBase", (function (_DepartementItem) {
                function AffectationBase(oMap) {
                    _classCallCheck(this, AffectationBase);

                    _get(Object.getPrototypeOf(AffectationBase.prototype), "constructor", this).call(this, oMap);
                    this._anneeid = null;
                    this._semestreid = null;
                    this._groupeid = null;
                    this._uniteid = null;
                    this._matiereid = null;
                    this._personid = null;
                    this._profid = null;
                    this._etudid = null;
                    this._fullname = null;
                    this._genre = null;
                    this._date = null;
                    this._status = null;
                    if (oMap !== undefined && oMap !== null) {
                        if (oMap.status !== undefined) {
                            this.status = oMap.status;
                        }
                        if (oMap.date !== undefined) {
                            this.date = oMap.date;
                        }
                        if (oMap.genre !== undefined) {
                            this.genre = oMap.genre;
                        }
                        if (oMap.anneeid !== undefined) {
                            this.anneeid = oMap.anneeid;
                        }
                        if (oMap.semestreid !== undefined) {
                            this.semestreid = oMap.semestreid;
                        }
                        if (oMap.groupeid !== undefined) {
                            this.groupeid = oMap.groupeid;
                        }
                        if (oMap.uniteid !== undefined) {
                            this.uniteid = oMap.uniteid;
                        }
                        if (oMap.matiereid !== undefined) {
                            this.matiereid = oMap.matiereid;
                        }
                        if (oMap.personid !== undefined) {
                            this.personid = oMap.personid;
                        }
                        if (oMap.enseignantid !== undefined) {
                            this.enseignantid = oMap.enseignantid;
                        }
                        if (oMap.etudiantid !== undefined) {
                            this.etudiantd = oMap.etudiantid;
                        }
                        if (oMap.fullname !== undefined) {
                            this.fullname = oMap.fullname;
                        }
                    } // oMap
                }

                _inherits(AffectationBase, _DepartementItem);

                _createClass(AffectationBase, {
                    status: { // constructor

                        get: function () {
                            return this._status !== undefined ? this._status : null;
                        },
                        set: function (s) {
                            this._status = s !== undefined && s !== null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_status: {
                        get: function () {
                            return this.status !== null;
                        }
                    },
                    date: {
                        get: function () {
                            return this._date !== undefined ? this._date : null;
                        },
                        set: function (s) {
                            this._date = s !== undefined ? s : null;
                        }
                    },
                    has_date: {
                        get: function () {
                            return this.date !== null;
                        }
                    },
                    genre: {
                        get: function () {
                            return this._genre !== undefined ? this._genre : null;
                        },
                        set: function (s) {
                            this._genre = s !== undefined && s !== null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_genre: {
                        get: function () {
                            return this.genre !== null;
                        }
                    },
                    anneeid: {
                        get: function () {
                            return this._anneeid !== undefined ? this._anneeid : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._anneeid = s;
                            } else {
                                this._anneeid = null;
                            }
                        }
                    },
                    has_anneeid: {
                        get: function () {
                            return this.anneeid !== null;
                        }
                    },
                    semestreid: {
                        //

                        get: function () {
                            return this._semestreid !== undefined ? this._semestreid : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._semestreid = s;
                            } else {
                                this._semestreid = null;
                            }
                        }
                    },
                    has_semestreid: {
                        get: function () {
                            return this.semestreid !== null;
                        }
                    },
                    groupeid: {
                        //

                        get: function () {
                            return this._groupeid !== undefined ? this._groupeid : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._groupeid = s;
                            } else {
                                this._groupeid = null;
                            }
                        }
                    },
                    has_groupeid: {
                        get: function () {
                            return this.groupeid !== null;
                        }
                    },
                    uniteid: {
                        //

                        get: function () {
                            return this._uniteid !== undefined ? this._uniteid : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._uniteid = s;
                            } else {
                                this._uniteid = null;
                            }
                        }
                    },
                    has_uniteid: {
                        get: function () {
                            return this.uniteid !== null;
                        }
                    },
                    matiereid: {
                        //

                        get: function () {
                            return this._matiereid !== undefined ? this._matiereid : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._matiereid = s;
                            } else {
                                this._matiereid = null;
                            }
                        }
                    },
                    has_matiereid: {
                        get: function () {
                            return this.matiereid !== null;
                        }
                    },
                    personid: {
                        //

                        get: function () {
                            return this._personid !== undefined ? this._personid : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._personid = s;
                            } else {
                                this._personid = null;
                            }
                        }
                    },
                    has_personid: {
                        get: function () {
                            return this.personid !== null;
                        }
                    },
                    enseignantid: {
                        //

                        get: function () {
                            return this._profid !== undefined ? this._profid : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._profid = s;
                            } else {
                                this._profid = null;
                            }
                        }
                    },
                    has_enseignantid: {
                        get: function () {
                            return this.enseignantid !== null;
                        }
                    },
                    etudiantid: {
                        //

                        get: function () {
                            return this._etudid !== undefined ? this._etudid : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._etudid = s;
                            } else {
                                this._etudid = null;
                            }
                        }
                    },
                    has_etudiantid: {
                        get: function () {
                            return this.etudiantid !== null;
                        }
                    },
                    fullname: {
                        //

                        get: function () {
                            return this._fullname !== undefined ? this._fullname : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.trim().length > 0) {
                                this._fullname = s.trim();
                            } else {
                                this._fullname = null;
                            }
                        }
                    },
                    has_fullname: {
                        get: function () {
                            return this.anneeid !== null;
                        }
                    },
                    is_storeable: {
                        //

                        get: function () {
                            return _get(Object.getPrototypeOf(AffectationBase.prototype), "is_storeable", this) && this.has_anneeid && this.has_semestreid;
                        }
                    },
                    to_insert_map: {
                        //

                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(AffectationBase.prototype), "to_insert_map", this).call(this, oMap);
                            if (this.has_status) {
                                oMap.status = this.status;
                            }
                            if (this.has_date) {
                                oMap.date = this.date;
                            }
                            if (this.has_genre) {
                                oMap.genre = this.genre;
                            }
                            if (this.has_anneeid) {
                                oMap.anneeid = this.anneeid;
                            }
                            if (this.has_semestreid) {
                                oMap.semestreid = this.semestreid;
                            }
                            if (this.has_groupeid) {
                                oMap.groupeid = this.groupeid;
                            }
                            if (this.has_uniteid) {
                                oMap.uniteid = this.uniteid;
                            }
                            if (this.has_matiereid) {
                                oMap.matiereid = this.matiereid;
                            }
                            if (this.has_personid) {
                                oMap.personid = this.personid;
                            }
                            if (this.has_enseignantid) {
                                oMap.enseignantid = this.enseignantid;
                            }
                            if (this.has_etudiantid) {
                                oMap.etudiantd = this.etudiantid;
                            }
                            if (this.has_fullname) {
                                oMap.fullname = this.fullname;
                            }
                        } // to_insert_map

                    }
                });

                return AffectationBase;
            })(DepartementItem));
        }
    };
});
// affectationbase.js
// class AffectationBase
//# sourceMappingURL=data:application/json;base64,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