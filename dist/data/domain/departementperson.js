System.register(["./departementitem"], function (_export) {
    var DepartementItem, _createClass, _get, _inherits, _classCallCheck, DepartementPerson;

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
            DepartementPerson = _export("DepartementPerson", (function (_DepartementItem) {
                function DepartementPerson(oMap) {
                    _classCallCheck(this, DepartementPerson);

                    _get(Object.getPrototypeOf(DepartementPerson.prototype), "constructor", this).call(this, oMap);
                    this._personid = null;
                    this._fullname = null;
                    if (oMap !== undefined && oMap !== null) {
                        if (oMap.personid !== undefined) {
                            this.personid = oMap.personid;
                        }
                        if (oMap.fullname !== undefined) {
                            this.fullname = oMap.fullname;
                        }
                    } // oMap
                }

                _inherits(DepartementPerson, _DepartementItem);

                _createClass(DepartementPerson, {
                    personid: { // constructor

                        get: function () {
                            return this._personid !== undefined ? this._personid : null;
                        },
                        // id
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._personid = s;
                            } else {
                                this._personid = null;
                            }
                        }
                    },
                    has_personid: { // id

                        get: function () {
                            return this.personid !== null;
                        }
                    },
                    fullname: {
                        get: function () {
                            return this._fullname !== undefined ? this._fullname : null;
                        },
                        set: function (s) {
                            this._fullname = s !== undefined && s !== null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    has_fullname: {
                        get: function () {
                            return this.fullname !== null;
                        }
                    },
                    change_person: {
                        value: function change_person(p) {
                            if (p !== undefined && p !== null && p.fullname !== undefined && p.id !== undefined) {
                                this.fullname = p.fullname;
                                this.personid = p.id;
                            } // p
                        }
                    },
                    is_storeable: {
                        get: function () {
                            return _get(Object.getPrototypeOf(DepartementPerson.prototype), "is_storeable", this) && this.has_personid && this.has_fullname;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(DepartementPerson.prototype), "to_insert_map", this).call(this, oMap);
                            if (this.has_personid) {
                                oMap.personid = this.personid;
                            }
                            if (this.has_fullname) {
                                oMap.fullname = this.fullname;
                            }
                        } // toInsertMap

                    }
                });

                return DepartementPerson;
            })(DepartementItem));
        }
    };
});
//departementperson.js
// class DepartementPerson
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2RlcGFydGVtZW50cGVyc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFFSSxlQUFlLGtEQUlOLGlCQUFpQjs7OztBQUoxQiwyQkFBZSxvQkFBZixlQUFlOzs7Ozs7Ozs7Ozs7OztBQUlOLDZCQUFpQjtBQUNmLHlCQURGLGlCQUFpQixDQUNkLElBQUksRUFBRTswQ0FEVCxpQkFBaUI7O0FBRXRCLCtDQUZLLGlCQUFpQiw2Q0FFaEIsSUFBSSxFQUFFO0FBQ1osd0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLHdCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN0Qix3QkFBSSxBQUFDLElBQUksS0FBSyxTQUFTLElBQU0sSUFBSSxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ3pDLDRCQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzdCLGdDQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7eUJBQ2pDO0FBQ0QsNEJBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFDN0IsZ0NBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzt5QkFDakM7cUJBQ0o7QUFBQSxpQkFDSjs7MEJBYlEsaUJBQWlCOzs2QkFBakIsaUJBQWlCO0FBaUJ0Qiw0QkFBUTs7NkJBSEEsWUFBRztBQUNYLG1DQUFPLEFBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEdBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7eUJBQ2pFOzs2QkFDVyxVQUFDLENBQUMsRUFBRTtBQUNaLGdDQUFJLEFBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBTSxDQUFDLEtBQUssSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUN2RSxvQ0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7NkJBQ3RCLE1BQU07QUFDSCxvQ0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7NkJBQ3pCO3lCQUNKOztBQUNHLGdDQUFZOzs2QkFBQSxZQUFHO0FBQ2YsbUNBQVEsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUU7eUJBQ25DOztBQUlHLDRCQUFROzZCQUhBLFlBQUc7QUFDWCxtQ0FBTyxBQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxHQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3lCQUNqRTs2QkFDVyxVQUFDLENBQUMsRUFBRTtBQUNaLGdDQUFJLENBQUMsU0FBUyxHQUFHLEFBQUMsQUFBQyxDQUFDLEtBQUssU0FBUyxJQUFNLENBQUMsS0FBSyxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxHQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7eUJBQ25HOztBQUNHLGdDQUFZOzZCQUFBLFlBQUc7QUFDZixtQ0FBUSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBRTt5QkFDbkM7O0FBQ0QsaUNBQWE7K0JBQUEsdUJBQUMsQ0FBQyxFQUFFO0FBQ2IsZ0NBQUksQUFBQyxDQUFDLEtBQUssU0FBUyxJQUFNLENBQUMsS0FBSyxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQUFBQyxJQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssU0FBUyxBQUFDLEVBQUU7QUFDekYsb0NBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUMzQixvQ0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDOzZCQUN4QjtBQUFBLHlCQUNKOztBQUNHLGdDQUFZOzZCQUFBLFlBQUc7QUFDZixtQ0FBUSwyQkEzQ0gsaUJBQWlCLHNDQTJDUSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUU7eUJBQ3pFOztBQUNELGlDQUFhOytCQUFBLHVCQUFDLElBQUksRUFBRTtBQUNoQix1REE5Q0ssaUJBQWlCLCtDQThDRixJQUFJLEVBQUU7QUFDMUIsZ0NBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNuQixvQ0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOzZCQUNqQztBQUNELGdDQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDbkIsb0NBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzs2QkFDakM7eUJBQ0o7QUFBQTs7Ozt1QkFyRFEsaUJBQWlCO2VBQVMsZUFBZSIsImZpbGUiOiJkYXRhL2RvbWFpbi9kZXBhcnRlbWVudHBlcnNvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9