System.register(["./descriptionitem"], function (_export) {
    var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, SigleNameItem;

    return {
        setters: [function (_descriptionitem) {
            DescriptionItem = _descriptionitem.DescriptionItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            SigleNameItem = _export("SigleNameItem", (function (_DescriptionItem) {
                function SigleNameItem(oMap) {
                    _classCallCheck(this, SigleNameItem);

                    _get(Object.getPrototypeOf(SigleNameItem.prototype), "constructor", this).call(this, oMap);
                    if (oMap !== undefined && oMap !== null) {
                        if (oMap.sigle !== undefined) {
                            this.sigle = oMap.sigle;
                        }
                        if (oMap.name !== undefined) {
                            this.name = oMap.name;
                        }
                    } // oMap
                }

                _inherits(SigleNameItem, _DescriptionItem);

                _createClass(SigleNameItem, {
                    sigle: { // constructor

                        get: function () {
                            return this._sigle != undefined ? this._sigle : null;
                        },
                        set: function (s) {
                            if (s != undefined && s != null && s.trim().length > 0) {
                                this._sigle = s.trim().toLowerCase();
                            } else {
                                this._sigle = null;
                            }
                        }
                    },
                    has_sigle: {
                        get: function () {
                            return this.sigle != null;
                        }
                    },
                    name: {
                        get: function () {
                            return this._name != undefined ? this._name : null;
                        },
                        set: function (s) {
                            if (s !== undefined && s !== null && s.trim().length > 0) {
                                this._name = s.trim();
                            } else {
                                this._name = null;
                            }
                        }
                    },
                    has_name: {
                        get: function () {
                            return this.name !== null;
                        }
                    },
                    is_storeable: {
                        get: function () {
                            return _get(Object.getPrototypeOf(SigleNameItem.prototype), "is_storeable", this) && this.has_sigle;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(SigleNameItem.prototype), "to_insert_map", this).call(this, oMap);
                            if (this.has_sigle) {
                                oMap.sigle = this.sigle;
                            }
                            if (this.has_name) {
                                oMap.name = this.name;
                            }
                        } // toInsertMap

                    }
                });

                return SigleNameItem;
            })(DescriptionItem));
        }
    };
});
// siglenameitem.js
//
// class SigleNameItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL3NpZ2xlbmFtZWl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUdJLGVBQWUsa0RBSU4sYUFBYTs7OztBQUp0QiwyQkFBZSxvQkFBZixlQUFlOzs7Ozs7Ozs7Ozs7OztBQUlOLHlCQUFhO0FBQ1gseUJBREYsYUFBYSxDQUNWLElBQUksRUFBRTswQ0FEVCxhQUFhOztBQUVkLCtDQUZDLGFBQWEsNkNBRVIsSUFBSSxFQUFFO0FBQ1osd0JBQUksQUFBQyxJQUFJLEtBQUssU0FBUyxJQUFNLElBQUksS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUN6Qyw0QkFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtBQUMxQixnQ0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO3lCQUMzQjtBQUNELDRCQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3pCLGdDQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ3pCO3FCQUNKO0FBQUEsaUJBQ0o7OzBCQVhJLGFBQWE7OzZCQUFiLGFBQWE7QUFlbEIseUJBQUs7OzZCQUhBLFlBQUc7QUFDUixtQ0FBTyxBQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3lCQUMxRDs2QkFDUSxVQUFDLENBQUMsRUFBRTtBQUNULGdDQUFJLEFBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBTSxDQUFDLElBQUksSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUMxRCxvQ0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7NkJBQ3hDLE1BQU07QUFDSCxvQ0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NkJBQ3RCO3lCQUNKOztBQUNHLDZCQUFTOzZCQUFBLFlBQUc7QUFDWixtQ0FBUSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBRTt5QkFDL0I7O0FBSUcsd0JBQUk7NkJBSEEsWUFBRztBQUNQLG1DQUFPLEFBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7eUJBQ3hEOzZCQUNPLFVBQUMsQ0FBQyxFQUFFO0FBQ1IsZ0NBQUksQUFBQyxDQUFDLEtBQUssU0FBUyxJQUFNLENBQUMsS0FBSyxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxFQUFFO0FBQzVELG9DQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs2QkFDekIsTUFBTTtBQUNILG9DQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs2QkFDckI7eUJBQ0o7O0FBQ0csNEJBQVE7NkJBQUEsWUFBRztBQUNYLG1DQUFRLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFFO3lCQUMvQjs7QUFDRyxnQ0FBWTs2QkFBQSxZQUFHO0FBQ2YsbUNBQVEsMkJBdkNILGFBQWEsc0NBdUNZLElBQUksQ0FBQyxTQUFTLENBQUU7eUJBQ2pEOztBQUNELGlDQUFhOytCQUFBLHVCQUFDLElBQUksRUFBRTtBQUNaLHVEQTFDQyxhQUFhLCtDQTBDTSxJQUFJLEVBQUU7QUFDMUIsZ0NBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNoQixvQ0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOzZCQUMzQjtBQUNELGdDQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDZixvQ0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOzZCQUN6Qjt5QkFDSjtBQUFBOzs7O3VCQWpESSxhQUFhO2VBQVMsZUFBZSIsImZpbGUiOiJkYXRhL2RvbWFpbi9zaWdsZW5hbWVpdGVtLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=