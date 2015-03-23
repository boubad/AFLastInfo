System.register(["./descriptionitem"], function (_export) {
    var DescriptionItem, _createClass, _get, _inherits, _classCallCheck, AttachedDoc;

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
            AttachedDoc = _export("AttachedDoc", (function (_DescriptionItem) {
                function AttachedDoc(oMap) {
                    _classCallCheck(this, AttachedDoc);

                    _get(Object.getPrototypeOf(AttachedDoc.prototype), "constructor", this).call(this, oMap);
                    this._data = null;
                    this._name = null;
                    this._genre = null;
                    this._mime = null;
                    if (oMap !== undefined && oMap !== null) {
                        if (oMap.mimetype !== undefined) {
                            this.mimetype = oMap.mimetype;
                        }
                        if (oMap.genre !== undefined) {
                            this.genre = oMap.genre;
                        }
                        if (oMap.name !== undefined) {
                            this.name = oMap.name;
                        }
                        if (oMap.data !== undefined) {
                            this.data = oMap.data;
                        }
                    } // oMap
                }

                _inherits(AttachedDoc, _DescriptionItem);

                _createClass(AttachedDoc, {
                    data: { // constructor

                        get: function () {
                            return this._data !== undefined ? this._data : null;
                        },
                        // id
                        set: function (s) {
                            if (s !== undefined && s !== null && s.length > 0) {
                                this._data = s;
                            } else {
                                this._data = null;
                            }
                        }
                    },
                    has_data: {
                        get: function () {
                            return this.data !== null;
                        }
                    },
                    name: {
                        get: function () {
                            return this._name !== undefined ? this._name : null;
                        },
                        // id
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
                    genre: {
                        get: function () {
                            return this._genre !== undefined ? this._genre : null;
                        },
                        // id
                        set: function (s) {
                            if (s !== undefined && s !== null && s.trim().length > 0) {
                                this._genre = s.trim().toLowerCase();
                            } else {
                                this._genre = null;
                            }
                        }
                    },
                    has_genre: {
                        get: function () {
                            return this.genre !== null;
                        }
                    },
                    mimetype: {
                        get: function () {
                            return this._mime !== undefined ? this._mime : null;
                        },
                        // id
                        set: function (s) {
                            if (s !== undefined && s !== null && s.trim().length > 0) {
                                this._mime = s.trim();
                            } else {
                                this._mime = null;
                            }
                        }
                    },
                    has_mimetype: {
                        get: function () {
                            return this.mimetype !== null;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(AttachedDoc.prototype), "to_insert_map", this).call(this, oMap);
                            if (this.has_mimetype) {
                                oMap.mimetype = this.mimetype;
                            }
                            if (this.has_genre) {
                                oMap.genre = this.genre;
                            }
                            if (this.has_name) {
                                oMap.name = this.name;
                            }
                            if (this.has_data) {
                                oMap.data = this.data;
                            }
                        }
                    },
                    is_storeable: { // toInsertMap

                        get: function () {
                            return this.has_mimetype && this.has_genre && this.has_name && this.has_data;
                        }
                    },
                    type: {
                        get: function () {
                            return "attacheddoc";
                        }
                    },
                    collection_name: {
                        get: function () {
                            return "attacheddocs";
                        }
                    }
                });

                return AttachedDoc;
            })(DescriptionItem));
        }
    };
});
//attacheddoc.js
//
// class DescriptionItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2F0dGFjaGVkZG9jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFHSSxlQUFlLGtEQUlOLFdBQVc7Ozs7QUFKcEIsMkJBQWUsb0JBQWYsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUFJTix1QkFBVztBQUNULHlCQURGLFdBQVcsQ0FDUixJQUFJLEVBQUU7MENBRFQsV0FBVzs7QUFFWiwrQ0FGQyxXQUFXLDZDQUVOLElBQUksRUFBRTtBQUNaLHdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQix3QkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsd0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLHdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQix3QkFBSSxBQUFDLElBQUksS0FBSyxTQUFTLElBQU0sSUFBSSxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ3pDLDRCQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzdCLGdDQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7eUJBQ2pDO0FBQ0QsNEJBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7QUFDMUIsZ0NBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDM0I7QUFDRCw0QkFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtBQUN6QixnQ0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3lCQUN6QjtBQUNELDRCQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3pCLGdDQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ3pCO3FCQUNKO0FBQUEsaUJBQ0o7OzBCQXJCSSxXQUFXOzs2QkFBWCxXQUFXO0FBeUJoQix3QkFBSTs7NkJBSEEsWUFBRztBQUNILG1DQUFPLEFBQUMsSUFB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SUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNoQixvQ0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOzZCQUMzQjtBQUNELGdDQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDZixvQ0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOzZCQUN6QjtBQUNELGdDQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDZixvQ0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOzZCQUN6Qjt5QkFDSjs7QUFDRCxnQ0FBWTs7NkJBQUEsWUFBRztBQUNmLG1DQUFRLElBQUksQ0FBQyxZQUFZLElBQ3JCLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFFO3lCQUN6RDs7QUFDRyx3QkFBSTs2QkFBQSxZQUFHO0FBQ1AsbUNBQU8sYUFBYSxDQUFDO3lCQUN4Qjs7QUFDRyxtQ0FBZTs2QkFBQSxZQUFHO0FBQ2xCLG1DQUFPLGNBQWMsQ0FBQzt5QkFDekI7Ozs7dUJBbEdRLFdBQVc7ZUFBUyxlQUFlIiwiZmlsZSI6ImRhdGEvZG9tYWluL2F0dGFjaGVkZG9jLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=