System.register(["./siglenameitem"], function (_export) {
    var SigleNameItem, _createClass, _get, _inherits, _classCallCheck, DepartementSigleNameItem;

    return {
        setters: [function (_siglenameitem) {
            SigleNameItem = _siglenameitem.SigleNameItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            DepartementSigleNameItem = _export("DepartementSigleNameItem", (function (_SigleNameItem) {
                function DepartementSigleNameItem(oMap) {
                    _classCallCheck(this, DepartementSigleNameItem);

                    _get(Object.getPrototypeOf(DepartementSigleNameItem.prototype), "constructor", this).call(this, oMap);
                    this._depid = null;
                    if (oMap !== undefined && oMap !== null) {
                        if (oMap.departementid !== undefined) {
                            this.departementid = oMap.departementid;
                        }
                    } // oMap
                }

                _inherits(DepartementSigleNameItem, _SigleNameItem);

                _createClass(DepartementSigleNameItem, {
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
                            return _get(Object.getPrototypeOf(DepartementSigleNameItem.prototype), "is_storeable", this) && this.has_departementid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(DepartementSigleNameItem.prototype), "to_insert_map", this).call(this, oMap);
                            if (this.has_departementid) {
                                oMap.departementid = this.departementid;
                            }
                        } // toInsertMap

                    }
                });

                return DepartementSigleNameItem;
            })(SigleNameItem));
        }
    };
});
//departementsiglename
//
// class DepartementSigleNameItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2RlcGFydGVtZW50c2lnbGVuYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFHSSxhQUFhLGtEQUlKLHdCQUF3Qjs7OztBQUpqQyx5QkFBYSxrQkFBYixhQUFhOzs7Ozs7Ozs7Ozs7OztBQUlKLG9DQUF3QjtBQUN0Qix5QkFERix3QkFBd0IsQ0FDckIsSUFBSSxFQUFFOzBDQURULHdCQUF3Qjs7QUFFekIsK0NBRkMsd0JBQXdCLDZDQUVuQixJQUFJLEVBQUU7QUFDWix3QkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsd0JBQUksQUFBQyxJQUFJLEtBQUssU0FBUyxJQUFNLElBQUksS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUN6Qyw0QkFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsRUFBRTtBQUNsQyxnQ0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO3lCQUMzQztxQkFDSjtBQUFBLGlCQUNKOzswQkFUSSx3QkFBd0I7OzZCQUF4Qix3QkFBd0I7QUFhN0IsaUNBQWE7OzZCQUhBLFlBQUc7QUFDWixtQ0FBTyxBQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxHQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3lCQUMzRDs7NkJBQ1ksVUFBQyxDQUFDLEVBQUU7QUFDYixnQ0FBSSxBQUFDLENBQUMsS0FBSyxTQUFTLElBQU0sQ0FBQyxLQUFLLElBQUksQUFBQyxJQUNoQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxFQUFFO0FBQ2xDLG9DQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs2QkFDbkIsTUFBTTtBQUNILG9DQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs2QkFDdEI7eUJBQ0o7O0FBQ0Qsc0NBQWtCOzs2QkFBQSxZQUFHO0FBQ3JCLG1DQUFRLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFFO3lCQUN4Qzs7QUFDRyxnQ0FBWTs2QkFBQSxZQUFHO0FBQ2YsbUNBQVEsMkJBekJILHdCQUF3QixzQ0F5QkMsSUFBSSxDQUFDLGlCQUFpQixDQUFFO3lCQUN6RDs7QUFDRCxpQ0FBYTsrQkFBQSx1QkFBQyxJQUFJLEVBQUU7QUFDWix1REE1QkMsd0JBQXdCLCtDQTRCTCxJQUFJLEVBQUU7QUFDMUIsZ0NBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO0FBQ3hCLG9DQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7NkJBQzNDO3lCQUNKO0FBQUE7Ozs7dUJBaENJLHdCQUF3QjtlQUFTLGFBQWEiLCJmaWxlIjoiZGF0YS9kb21haW4vZGVwYXJ0ZW1lbnRzaWdsZW5hbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==