System.register(["./departementsiglename"], function (_export) {
    var DepartementSigleNameItem, _createClass, _get, _inherits, _classCallCheck, Matiere;

    return {
        setters: [function (_departementsiglename) {
            DepartementSigleNameItem = _departementsiglename.DepartementSigleNameItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Matiere = _export("Matiere", (function (_DepartementSigleNameItem) {
                function Matiere(oMap) {
                    _classCallCheck(this, Matiere);

                    _get(Object.getPrototypeOf(Matiere.prototype), "constructor", this).call(this, oMap);
                    this._uniteid = null;
                    this._coef = null;
                    this._ecs = null;
                    this._mat_module = null;
                    this._genre = null;
                    if (oMap != undefined && oMap != null) {
                        if (oMap.uniteid != undefined) {
                            this.uniteid = oMap.uniteid;
                        }
                        if (oMap.coefficient != undefined) {
                            this.coefficient = oMap.coefficient;
                        }
                        if (oMap.ecs != undefined) {
                            this.ecs = oMap.ecs;
                        }
                        if (oMap.genre != undefined) {
                            this.genre = oMap.genre;
                        }
                        if (oMap.mat_module != undefined) {
                            this.mat_module = oMap.mat_module;
                        }
                    } // oMap
                }

                _inherits(Matiere, _DepartementSigleNameItem);

                _createClass(Matiere, {
                    type: { // constructor

                        get: function () {
                            return "matiere";
                        }
                    },
                    collection_name: {
                        get: function () {
                            return "matieres";
                        }
                    },
                    mat_module: {
                        get: function () {
                            return this._mat_module != undefined && this._mat_module != null ? this._mat_module : null;
                        },
                        set: function (v) {
                            if (v != undefined && v != null && v.trim().length > 0) {
                                this._mat_module = v.trim().toLowerCase();
                            } else {
                                this._mat_module = null;
                            }
                        }
                    },
                    has_mat_module: {
                        get: function () {
                            return this.mat_module != null;
                        }
                    },
                    genre: {
                        get: function () {
                            return this._genre != undefined && this._genre != null ? this._genre : null;
                        },
                        set: function (v) {
                            if (v != undefined && v != null && v.trim().length > 0) {
                                this._genre = v.trim().toLowerCase();
                            } else {
                                this._genre = null;
                            }
                        }
                    },
                    has_genre: {
                        get: function () {
                            return this.genre != null;
                        }
                    },
                    ecs: {
                        get: function () {
                            return this._ecs != undefined && this._ecs != null ? this._ecs : null;
                        },
                        set: function (v) {
                            if (v != undefined && v != null && v > 0) {
                                this._ecs = v;
                            } else {
                                this._ecs = null;
                            }
                        }
                    },
                    has_ecs: {
                        get: function () {
                            return this.ecs != null;
                        }
                    },
                    coefficient: {
                        get: function () {
                            return this._coef != undefined && this._coef != null ? this._coef : null;
                        },
                        set: function (v) {
                            if (v != undefined && v != null && v > 0) {
                                this._coef = v;
                            } else {
                                this._coef = null;
                            }
                        }
                    },
                    has_coefficient: {
                        get: function () {
                            return this.coefficient != null;
                        }
                    },
                    uniteid: {
                        get: function () {
                            return this._uniteid != undefined ? this._uniteid : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.toString().trim().length > 0) {
                                this._uniteid = s;
                            } else {
                                this._uniteid = null;
                            }
                        }
                    },
                    has_uniteid: {
                        get: function () {
                            return this.uniteid != null;
                        }
                    },
                    is_storeable: {
                        get: function () {
                            return _get(Object.getPrototypeOf(Matiere.prototype), "is_storeable", this) && this.has_uniteid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(Matiere.prototype), "to_insert_map", this).call(this, oMap);
                            if (this.has_uniteid) {
                                oMap.uniteid = this.uniteid;
                            }
                            if (this.has_genre) {
                                oMap.genre = this.genre;
                            }
                            if (this.has_mat_module) {
                                oMap.mat_module = this.mat_module;
                            }
                            if (this.has_coefficient) {
                                oMap.coefficient = this.coefficient;
                            }
                            if (this.has_ecs) {
                                oMap.ecs = this.ecs;
                            }
                        } // to_insert_map

                    }
                });

                return Matiere;
            })(DepartementSigleNameItem));
        }
    };
});
// matiere.js
//
// class Matiere
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxHQUFHLENBQUMsQUFBQyxFQUFFO0FBQzVDLG9DQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs2QkFDbEIsTUFBTTtBQUNILG9DQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs2QkFDckI7eUJBQ0o7O0FBQ0csbUNBQWU7NkJBQUEsWUFBRztBQUNsQixtQ0FBUSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBRTt5QkFDckM7O0FBSUcsMkJBQU87NkJBSEEsWUFBRztBQUNWLG1DQUFPLEFBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7eUJBQzlEOzZCQUNVLFVBQUMsQ0FBQyxFQUFFO0FBQ1gsZ0NBQUksQUFBQyxDQUFDLElBQUksU0FBUyxJQUFNLENBQUMsSUFBSSxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxFQUFFO0FBQ3JFLG9DQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs2QkFDckIsTUFBTTtBQUNILG9DQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs2QkFDeEI7eUJBQ0o7O0FBQ0csK0JBQVc7NkJBQUEsWUFBRztBQUNkLG1DQUFRLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFFO3lCQUNqQzs7QUFDRyxnQ0FBWTs2QkFBQSxZQUFHO0FBQ2YsbUNBQVEsMkJBbkdILE9BQU8sc0NBbUdrQixJQUFJLENBQUMsV0FBVyxDQUFFO3lCQUNuRDs7QUFDRCxpQ0FBYTsrQkFBQSx1QkFBQyxJQUFJLEVBQVE7QUFDbEIsdURBdEdDLE9BQU8sK0NBc0dZLElBQUksRUFBRTtBQUMxQixnQ0FBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2xCLG9DQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7NkJBQy9CO0FBQ0QsZ0NBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNoQixvQ0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOzZCQUMzQjtBQUNELGdDQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDckIsb0NBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs2QkFDckM7QUFDRCxnQ0FBSSxJQUFJLENBQUMsZUFBZSxFQUFFO0FBQ3RCLG9DQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7NkJBQ3ZDO0FBQ0QsZ0NBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNkLG9DQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7NkJBQ3ZCO3lCQUNKO0FBQUE7Ozs7dUJBdEhJLE9BQU87ZUFBUyx3QkFBd0IiLCJmaWxlIjoiZGF0YS9kb21haW4vbWF0aWVyZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9