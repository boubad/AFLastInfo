System.register(["./affbase"], function (_export) {
    var AffectationBase, _createClass, _get, _inherits, _classCallCheck, Affectation;

    return {
        setters: [function (_affbase) {
            AffectationBase = _affbase.AffectationBase;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Affectation = _export("Affectation", (function (_AffectationBase) {
                function Affectation(oMap) {
                    _classCallCheck(this, Affectation);

                    _get(Object.getPrototypeOf(Affectation.prototype), "constructor", this).call(this, oMap);
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

                _inherits(Affectation, _AffectationBase);

                _createClass(Affectation, {
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
                            _get(Object.getPrototypeOf(Affectation.prototype), "to_insert_map", this).call(this, oMap);
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
                            if (!_get(Object.getPrototypeOf(Affectation.prototype), "is_storeable", this)) {
                                return false;
                            }
                            if (this.has_startDate && this.has_endDate) {
                                return this.startDate.getTime() <= this.endDate.getTime();
                            }
                            return this.has_groupeid && this.has_personid && this.has_fullname;
                        }
                    }
                });

                return Affectation;
            })(AffectationBase));
        }
    };
});
// affectation.js
// class Affectation
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2FmZmVjdGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFFSSxlQUFlLGtEQUlOLFdBQVc7Ozs7QUFKcEIsMkJBQWUsWUFBZixlQUFlOzs7Ozs7Ozs7Ozs7OztBQUlOLHVCQUFXO0FBQ1QseUJBREYsV0FBVyxDQUNSLElBQUksRUFBRTswQ0FEVCxXQUFXOztBQUVaLCtDQUZDLFdBQVcsNkNBRU4sSUFBSSxFQUFFO0FBQ1osd0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLHdCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQix3QkFBSSxBQUFDLElBQUksS0FBSyxTQUFTLElBQU0sSUFBSSxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ3pDLDRCQUFJLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxFQUFFO0FBQzdCLGdDQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7eUJBQ25DO0FBQ0QsNEJBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLEVBQUU7QUFDM0IsZ0NBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDL0I7cUJBQ0o7aUJBQ0o7OzBCQWJJLFdBQVc7OzZCQUFYLFdBQVc7QUFpQmhCLDZCQUFTOzs2QkFIQSxZQUFHO0FBQ1osbUNBQU8sQUFBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt5QkFDMUQ7NkJBQ1ksVUFBQyxDQUFDLEVBQUU7O0FBRWIsZ0NBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3lCQUNuQjs7QUFDRyxpQ0FBYTs2QkFBQSxZQUFHO0FBQ2hCLG1DQUFRLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFFO3lCQUNuQzs7QUFJRywyQkFBTzs2QkFIQSxZQUFHO0FBQ1YsbUNBQU8sQUFBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzt5QkFDdEQ7NkJBQ1UsVUFBQyxDQUFDLEVBQUU7O0FBRVgsZ0NBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO3lCQUNqQjs7QUFDRywrQkFBVzs2QkFBQSxZQUFHO0FBQ2QsbUNBQVEsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUU7eUJBQ2pDOztBQUNELGlDQUFhOytCQUFBLHVCQUFDLElBQUksRUFBRTtBQUNaLHVEQW5DQyxXQUFXLCtDQW1DUSxJQUFJLEVBQUU7QUFDMUIsZ0NBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUNwQixvQ0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDOzZCQUNuQztBQUNELGdDQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDbEIsb0NBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs2QkFDL0I7eUJBQ0o7O0FBQ0QsZ0NBQVk7OzZCQUFBLFlBQUc7QUFDZixnQ0FBSSw0QkE1Q0MsV0FBVyxrQ0E0Q08sRUFBRTtBQUNyQix1Q0FBTyxLQUFLLENBQUM7NkJBQ2hCO0FBQ0QsZ0NBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ3hDLHVDQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBRTs2QkFDL0Q7QUFDRCxtQ0FBUSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBRTt5QkFDeEU7Ozs7dUJBbkRRLFdBQVc7ZUFBUyxlQUFlIiwiZmlsZSI6ImRhdGEvZG9tYWluL2FmZmVjdGF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=