System.register([], function (_export) {
    var _createClass, _classCallCheck, BaseItem;

    return {
        setters: [],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //baseitem.js
            //
            BaseItem = _export("BaseItem", (function () {
                function BaseItem(oMap) {
                    _classCallCheck(this, BaseItem);

                    this._id = null;
                    this._rev = null;
                    if (oMap !== undefined && oMap !== null) {
                        if (oMap._id !== undefined) {
                            this.id = oMap._id;
                        }
                        if (oMap._rev !== undefined) {
                            this.rev = oMap._rev;
                        }
                    } // oMap
                }

                _createClass(BaseItem, {
                    id: { // constructor
                        //

                        get: function () {
                            return this._id !== undefined ? this._id : null;
                        },
                        // id
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._id = s;
                            } else {
                                this._id = null;
                            }
                        }
                    },
                    has_id: { // id

                        get: function () {
                            return this.id !== null;
                        }
                    },
                    rev: {
                        get: function () {
                            return this._rev !== undefined ? this._rev : null;
                        },
                        // id
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._rev = s;
                            } else {
                                this._rev = null;
                            }
                        }
                    },
                    has_rev: { // id

                        get: function () {
                            return this.rev !== null;
                        }
                    },
                    collection_name: {
                        //

                        get: function () {
                            return null;
                        }
                    },
                    has_collection_name: {
                        get: function () {
                            return this.collection_name !== null;
                        }
                    },
                    type: {
                        get: function () {
                            return null;
                        }
                    },
                    has_type: {
                        get: function () {
                            return this.type !== null;
                        }
                    },
                    is_storeable: {
                        //

                        get: function () {
                            return this.has_type && this.has_collection_name;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            if (this.has_type) {
                                oMap.type = this.type;
                            }
                        }
                    },
                    to_fetch_map: { // toInsertMap

                        value: function to_fetch_map(oMap) {
                            this.to_insert_map(oMap);
                            if (this.has_id) {
                                oMap._id = this.id;
                            }
                            if (this.has_rev) {
                                oMap._rev = this.rev;
                            }
                        }
                    },
                    toString: { // to_fetch_map

                        value: function toString() {
                            var oMap = {};
                            this.to_fetch_map(oMap);
                            return JSON.stringify(oMap);
                        }
                    }
                }, {
                    date_format: { // toString
                        //

                        get: function () {
                            return "YYYY-MM-DD";
                        }
                    },
                    array_contains: {
                        value: function array_contains(cont, val) {
                            if (cont !== undefined && cont !== null && val !== undefined && val !== null) {
                                var s = val.toString().trim().toLowerCase();
                                if (s.length > 0) {
                                    var n = cont.length;
                                    for (var i = 0; i < n; ++i) {
                                        var x = cont[i];
                                        if (x !== undefined && x !== null) {
                                            var ss = x.toString().trim().toLowerCase();
                                            if (ss == s) {
                                                return true;
                                            }
                                        }
                                    } // i
                                } // s
                            }
                            return false;
                        }
                    },
                    array_add: { // _array_contains

                        value: function array_add(cont, val) {
                            if (cont !== undefined && cont !== null && val !== undefined && val !== null) {
                                var s = val.toString().trim().toLowerCase();
                                if (s.length > 0) {
                                    var bFound = false;
                                    var n = cont.length;
                                    for (var i = 0; i < n; ++i) {
                                        var x = cont[i];
                                        if (x !== undefined && x !== null) {
                                            var ss = x.toString().trim().toLowerCase();
                                            if (ss == s) {
                                                bFound = true;
                                                break;
                                            }
                                        }
                                    } // i
                                    if (!bFound) {
                                        cont.push(val);
                                    }
                                } // val
                            }
                        }
                    },
                    array_remove: { // _array_add

                        value: function array_remove(cont, val) {
                            if (cont !== undefined && cont !== null && val !== undefined && val !== null) {
                                var s = val.toString().trim().toLowerCase();
                                if (s.length > 0) {
                                    var index = -1;
                                    var n = cont.length;
                                    for (var i = 0; i < n; ++i) {
                                        var x = cont[i];
                                        if (x !== undefined && x !== null) {
                                            var ss = x.toString().trim().toLowerCase();
                                            if (ss == s) {
                                                index = i;
                                                break;
                                            }
                                        }
                                    } // i
                                    if (index >= 0) {
                                        cont = cont.splice(index, 1);
                                    }
                                } // val
                            }
                        } // _array_add

                    }
                });

                return BaseItem;
            })());
        }
    };
});
// class BaseItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2Jhc2VpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7dUNBRWEsUUFBUTs7Ozs7Ozs7Ozs7OztBQUFSLG9CQUFRO0FBQ04seUJBREYsUUFBUSxDQUNMLElBQUksRUFBRTswQ0FEVCxRQUFROztBQUVULHdCQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztBQUNoQix3QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsd0JBQUksQUFBQyxJQUFJLEtBQUssU0FBUyxJQUFNLElBQUksS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUN6Qyw0QkFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtBQUN4QixnQ0FBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3lCQUN0QjtBQUNELDRCQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3pCLGdDQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ3hCO3FCQUNKO0FBQUEsaUJBQ0o7OzZCQVpJLFFBQVE7QUFpQmIsc0JBQUU7Ozs2QkFIQSxZQUFHO0FBQ0QsbUNBQU8sQUFBQyxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsR0FBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQzt5QkFDckQ7OzZCQUNDLFVBQUMsQ0FBQyxFQUFFO0FBQ0YsZ0NBQUksQUFBQyxDQUFDLEtBQUssU0FBUyxJQUFNLENBQUMsS0FBSyxJQUFJLEFBQUMsSUFDaEMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUNsQyxvQ0FBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7NkJBQ2hCLE1BQU07QUFDSCxvQ0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7NkJBQ25CO3lCQUNKOztBQUNELDBCQUFNOzs2QkFBQSxZQUFHO0FBQ1QsbUNBQVEsSUFB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