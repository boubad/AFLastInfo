System.register(["moment"], function (_export) {
    var moment, _createClass, _classCallCheck, BaseItem;

    return {
        setters: [function (_moment) {
            moment = _moment.moment;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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
                    check_date: {
                        value: function check_date(d) {
                            var dRet = null;
                            if (d !== undefined && d !== null) {
                                var x = moment(d);
                                if (x.isValid()) {
                                    dRet = x.toDate();
                                }
                            }
                            return dRet;
                        }
                    },
                    string_to_date: { // check_date

                        value: function string_to_date(s) {
                            var dRet = null;
                            if (s !== undefined && s !== null && s.trim().length > 0) {
                                var x = moment(s, BaseItem.date_format);
                                if (x.isValid()) {
                                    dRet = x.toDate();
                                }
                            }
                            return dRet;
                        }
                    },
                    date_to_string: { // string_to_date

                        value: function date_to_string(d) {
                            var sRet = null;
                            if (d !== undefined && d !== null) {
                                var x = moment(d);
                                if (x.isValid()) {
                                    sRet = x.format(BaseItem.date_format);
                                }
                            }
                            return sRet;
                        }
                    },
                    array_contains: { // date_to_string

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
//baseitem.js
// class BaseItem
//# sourceMappingURL=data:application/json;base64,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RTtBQUNyQyxnREFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzNDLGdEQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7QUFDWCxzREFBTSxHQUFHLElBQUksQ0FBQztBQUNkLHNEQUFNOzZDQUNQO3lDQUNGO3FDQUNGO0FBQ0Qsd0NBQUksQ0FBQyxNQUFNLEVBQUU7QUFDWCw0Q0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQ0FDaEI7aUNBQ0Y7QUFBQSw2QkFDRjt5QkFDRjs7QUFDTSxnQ0FBWTs7K0JBQUEsc0JBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUM3QixnQ0FBSSxBQUFDLElBQUksS0FBSyxTQUFTLElBQU0sSUFBSSxLQUFLLElBQUksQUFBQyxJQUFLLEdBQUcsS0FBSyxTQUFTLEFBQUMsSUFDL0QsR0FBRyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ2hCLG9DQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDNUMsb0NBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDaEIsd0NBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2Ysd0NBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDcEIseUNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDMUIsNENBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQiw0Q0FBSSxBQUFDLENBQUMsS0FBSyxTQUFTLElBQU0sQ0FBQyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ3JDLGdEQUFJLEVBQUUsR0FBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDNUMsZ0RBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtBQUNYLHFEQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ1Ysc0RBQU07NkNBQ1A7eUNBQ0Y7cUNBQ0Y7QUFDRCx3Q0FBSSxLQUFLLElBQUksQ0FBQyxFQUFFO0FBQ2QsNENBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztxQ0FDOUI7aUNBQ0Y7QUFBQSw2QkFDRjt5QkFDRjtBQUFBOzs7O3VCQS9LSSxRQUFRIiwiZmlsZSI6ImRhdGEvZG9tYWluL2Jhc2VpdGVtLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=