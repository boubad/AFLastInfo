System.register(["./baseitem", "./departementsiglename"], function (_export) {
    var BaseItem, DepartementSigleNameItem, _createClass, _get, _inherits, _classCallCheck, IntervallItem;

    return {
        setters: [function (_baseitem) {
            BaseItem = _baseitem.BaseItem;
        }, function (_departementsiglename) {
            DepartementSigleNameItem = _departementsiglename.DepartementSigleNameItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            IntervallItem = _export("IntervallItem", (function (_DepartementSigleNameItem) {
                function IntervallItem(oMap) {
                    _classCallCheck(this, IntervallItem);

                    _get(Object.getPrototypeOf(IntervallItem.prototype), "constructor", this).call(this, oMap);
                    this._start = null;
                    this._end = null;
                    if (oMap !== undefined && oMap !== null) {
                        if (oMap.startDate != undefined) {
                            this.startDate = oMap.startDate;
                        }
                        if (oMap.endDate != undefined) {
                            this.endDate = oMap.endDate;
                        }
                    }
                }

                _inherits(IntervallItem, _DepartementSigleNameItem);

                _createClass(IntervallItem, {
                    startDate: { // constructor

                        get: function () {
                            return this._start != undefined ? this._start : null;
                        },
                        set: function (d) {
                            //this._start = BaseItem.check_date(d);
                            this._start = d;
                        }
                    },
                    has_startDate: {
                        get: function () {
                            return this.startDate != null;
                        }
                    },
                    endDate: {
                        get: function () {
                            return this._end != undefined ? this._end : null;
                        },
                        set: function (d) {
                            //this._end = BaseItem.check_date(d);
                            this._end = d;
                        }
                    },
                    has_endDate: {
                        get: function () {
                            return this.endDate != null;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(IntervallItem.prototype), "to_insert_map", this).call(this, oMap);
                            if (this.has_startDate) {
                                oMap.startDate = this.startDate;
                            }
                            if (this.has_endDate) {
                                oMap.endDate = this.endDate;
                            }
                        }
                    },
                    is_storeable: { // to_insert_map

                        get: function () {
                            if (!_get(Object.getPrototypeOf(IntervallItem.prototype), "is_storeable", this) || !this.startDate || !this.has_endDate) {
                                return false;
                            }
                            var t1 = Date.parse(this.startDate.toString());
                            var t2 = Date.parse(this.endDate.toString());
                            if (isNaN(t1) || isNaN(t2)) {
                                return false;
                            }
                            return t1 <= t2;
                        }
                    }
                });

                return IntervallItem;
            })(DepartementSigleNameItem));
        }
    };
});
//intervalitem.js
//
// class IntervakItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2ludGVydmFsaXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBR0ksUUFBUSxFQUlSLHdCQUF3QixrREFJZixhQUFhOzs7O0FBUnRCLG9CQUFRLGFBQVIsUUFBUTs7QUFJUixvQ0FBd0IseUJBQXhCLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7QUFJZix5QkFBYTtBQUNYLHlCQURGLGFBQWEsQ0FDVixJQUFJLEVBQUU7MENBRFQsYUFBYTs7QUFFZCwrQ0FGQyxhQUFhLDZDQUVSLElBQUksRUFBRTtBQUNaLHdCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQix3QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsd0JBQUksQUFBQyxJQUFJLEtBQUssU0FBUyxJQUFNLElBQUksS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUN6Qyw0QkFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLFNBQVMsRUFBRTtBQUM3QixnQ0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO3lCQUNuQztBQUNELDRCQUFJLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxFQUFFO0FBQzNCLGdDQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7eUJBQy9CO3FCQUNKO2lCQUNKOzswQkFiSSxhQUFhOzs2QkFBYixhQUFhO0FBaUJsQiw2QkFBUzs7NkJBSEEsWUFBRztBQUNaLG1DQUFPLEFBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7eUJBQzFEOzZCQUNZLFVBQUMsQ0FBQyxFQUFFOztBQUVkLGdDQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt5QkFDbEI7O0FBQ0csaUNBQWE7NkJBQUEsWUFBRztBQUNoQixtQ0FBUSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBRTt5QkFDbkM7O0FBSUcsMkJBQU87NkJBSEEsWUFBRztBQUNWLG1DQUFPLEFBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLEdBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7eUJBQ3REOzZCQUNVLFVBQUMsQ0FBQyxFQUFFOztBQUVaLGdDQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzt5QkFDaEI7O0FBQ0csK0JBQVc7NkJBQUEsWUFBRztBQUNkLG1DQUFRLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFFO3lCQUNqQzs7QUFDRCxpQ0FBYTsrQkFBQSx1QkFBQyxJQUFJLEVBQUU7QUFDWix1REFuQ0MsYUFBYSwrQ0FtQ00sSUFBSSxFQUFFO0FBQzFCLGdDQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDcEIsb0NBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs2QkFDbkM7QUFDRCxnQ0FBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2xCLG9DQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7NkJBQy9CO3lCQUNKOztBQUNELGdDQUFZOzs2QkFBQSxZQUFHO0FBQ2YsZ0NBQUksQUFBQyw0QkE1Q0EsYUFBYSxrQ0E0Q00sSUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEFBQUMsSUFBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEFBQUMsRUFBQztBQUNsRSx1Q0FBTyxLQUFLLENBQUM7NkJBQ2hCO0FBQ0QsZ0NBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQy9DLGdDQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUM3QyxnQ0FBSSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFDO0FBQ3ZCLHVDQUFPLEtBQUssQ0FBQzs2QkFDaEI7QUFDRCxtQ0FBUSxFQUFFLElBQUksRUFBRSxDQUFFO3lCQUNyQjs7Ozt1QkFyRFEsYUFBYTtlQUFTLHdCQUF3QiIsImZpbGUiOiJkYXRhL2RvbWFpbi9pbnRlcnZhbGl0ZW0uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==