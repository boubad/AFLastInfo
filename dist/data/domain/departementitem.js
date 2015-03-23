System.register(["./descriptionitem"], function (_export) {
    var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, DepartementItem;

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
            DepartementItem = _export("DepartementItem", (function (_DescriptionItem) {
                function DepartementItem(oMap) {
                    _classCallCheck(this, DepartementItem);

                    _get(Object.getPrototypeOf(DepartementItem.prototype), "constructor", this).call(this, oMap);
                    this._depid = null;
                    if (oMap !== undefined && oMap !== null) {
                        if (oMap.departementid !== undefined) {
                            this.departementid = oMap.departementid;
                        }
                    } // oMap
                }

                _inherits(DepartementItem, _DescriptionItem);

                _createClass(DepartementItem, {
                    departementid: { // constructor

                        get: function () {
                            return this._depid !== undefined ? this._depid : null;
                        },
                        // id
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._depid = s;
                            } else {
                                this._depid = null;
                            }
                        }
                    },
                    has_departement_id: { // id

                        get: function () {
                            return this.departementid !== null;
                        }
                    },
                    is_storeable: {
                        get: function () {
                            return _get(Object.getPrototypeOf(DepartementItem.prototype), "is_storeable", this) && this.has_departementid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(DepartementItem.prototype), "to_insert_map", this).call(this, oMap);
                            if (this.has_departementid) {
                                oMap.departementid = this.departementid;
                            }
                        } // toInsertMap

                    }
                });

                return DepartementItem;
            })(DescriptionItem));
        }
    };
});
//departementitem.js
//
// class DepartementItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2RlcGFydGVtZW50aXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBR0ksZUFBZSxrREFJTixlQUFlOzs7O0FBSnhCLDJCQUFlLG9CQUFmLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FBSU4sMkJBQWU7QUFDYix5QkFERixlQUFlLENBQ1osSUFBSSxFQUFFOzBDQURULGVBQWU7O0FBRWhCLCtDQUZDLGVBQWUsNkNBRVYsSUFBSSxFQUFFO0FBQ1osd0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLHdCQUFJLEFBQUMsSUFBSSxLQUFLLFNBQVMsSUFBTSxJQUFJLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDekMsNEJBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUU7QUFDbEMsZ0NBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzt5QkFDM0M7cUJBQ0o7QUFBQSxpQkFDSjs7MEJBVEksZUFBZTs7NkJBQWYsZUFBZTtBQWFwQixpQ0FBYTs7NkJBSEEsWUFBRztBQUNaLG1DQUFPLEFBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEdBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7eUJBQzNEOzs2QkFDWSxVQUFDLENBQUMsRUFBRTtBQUNiLGdDQUFJLEFBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBTSxDQUFDLEtBQUssSUFBSSxBQUFDLElBQ2hDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUU7QUFDbEMsb0NBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzZCQUNuQixNQUFNO0FBQ0gsb0NBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzZCQUN0Qjt5QkFDSjs7QUFDRCxzQ0FBa0I7OzZCQUFBLFlBQUc7QUFDckIsbUNBQVEsSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUU7eUJBQ3hDOztBQUNHLGdDQUFZOzZCQUFBLFlBQUc7QUFDZixtQ0FBUSwyQkF6QkgsZUFBZSxzQ0F5QlUsSUFBSSxDQUFDLGlCQUFpQixDQUFFO3lCQUN6RDs7QUFDRCxpQ0FBYTsrQkFBQSx1QkFBQyxJQUFJLEVBQUU7QUFDWix1REE1QkMsZUFBZSwrQ0E0QkksSUFBSSxFQUFFO0FBQzFCLGdDQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUN4QixvQ0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDOzZCQUMzQzt5QkFDSjtBQUFBOzs7O3VCQWhDSSxlQUFlO2VBQVMsZUFBZSIsImZpbGUiOiJkYXRhL2RvbWFpbi9kZXBhcnRlbWVudGl0ZW0uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==