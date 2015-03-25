System.register(["./baseitem"], function (_export) {
    var BaseItem, _createClass, _get, _inherits, _classCallCheck, DescriptionItem;

    return {
        setters: [function (_baseitem) {
            BaseItem = _baseitem.BaseItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            DescriptionItem = _export("DescriptionItem", (function (_BaseItem) {
                function DescriptionItem(oMap) {
                    _classCallCheck(this, DescriptionItem);

                    _get(Object.getPrototypeOf(DescriptionItem.prototype), "constructor", this).call(this, oMap);
                    this._desc = null;
                    this._avatarid = null;
                    if (oMap !== undefined && oMap !== null) {
                        if (oMap.description !== undefined) {
                            this.description = oMap.description;
                        }
                        if (oMap.avatarid !== undefined) {
                            this.avatarid = oMap.avatarid;
                        }
                    } // oMap
                }

                _inherits(DescriptionItem, _BaseItem);

                _createClass(DescriptionItem, {
                    avatarid: { // constructor

                        get: function () {
                            return this._avatarid !== undefined ? this._avatarid : null;
                        },
                        // id
                        set: function (s) {
                            if (s !== undefined && s !== null && s.toString().trim().length > 0) {
                                this._avatarid = s;
                            } else {
                                this._avatarid = null;
                            }
                        }
                    },
                    has_avatarid: { // id

                        get: function () {
                            return this.avatarid !== null;
                        }
                    },
                    description: {
                        get: function () {
                            return this._desc !== undefined ? this._desc : null;
                        },
                        // description
                        set: function (s) {
                            if (s !== undefined && s !== null && s.trim().length > 0) {
                                this._desc = s.trim();
                            } else {
                                this._desc = null;
                            }
                        }
                    },
                    has_description: { // description

                        get: function () {
                            return this.description !== null;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(DescriptionItem.prototype), "to_insert_map", this).call(this, oMap);
                            if (this.has_description) {
                                oMap.description = this.description;
                            }
                            if (this.has_avatarid) {
                                oMap.avatarid = this.avatarid;
                            }
                        } // toInsertMap

                    }
                });

                return DescriptionItem;
            })(BaseItem));
        }
    };
});
// descriptionitem.js
//
// class DescriptionItem
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2Rlc2NyaXB0aW9uaXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBR0ksUUFBUSxrREFJQyxlQUFlOzs7O0FBSnhCLG9CQUFRLGFBQVIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUFJQywyQkFBZTtBQUNiLHlCQURGLGVBQWUsQ0FDWixJQUFJLEVBQUU7MENBRFQsZUFBZTs7QUFFaEIsK0NBRkMsZUFBZSw2Q0FFVixJQUFJLEVBQUU7QUFDWix3QkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsd0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLHdCQUFJLEFBQUMsSUFBSSxLQUFLLFNBQVMsSUFBTSxJQUFJLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDekMsNEJBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7QUFDaEMsZ0NBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDdkM7QUFDRCw0QkFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUM3QixnQ0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUNqQztxQkFDSjtBQUFBLGlCQUNKOzswQkFiSSxlQUFlOzs2QkFBZixlQUFlO0FBaUJwQiw0QkFBUTs7NkJBSEEsWUFBRztBQUNQLG1DQUFPLEFBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEdBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7eUJBQ2pFOzs2QkFDTyxVQUFDLENBQUMsRUFBRTtBQUNSLGdDQUFJLEFBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBTSxDQUFDLEtBQUssSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUN2RSxvQ0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7NkJBQ3RCLE1BQU07QUFDSCxvQ0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7NkJBQ3pCO3lCQUNKOztBQUNELGdDQUFZOzs2QkFBQSxZQUFHO0FBQ2YsbUNBQVEsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUU7eUJBQ25DOztBQUlHLCtCQUFXOzZCQUhBLFlBQUc7QUFDVixtQ0FBTyxBQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxHQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3lCQUN6RDs7NkJBQ1UsVUFBQyxDQUFDLEVBQUU7QUFDWCxnQ0FBSSxBQUFDLENBQUMsS0FBSyxTQUFTLElBQU0sQ0FBQyxLQUFLLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUU7QUFDNUQsb0NBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOzZCQUN6QixNQUFNO0FBQ0gsb0NBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOzZCQUNyQjt5QkFDSjs7QUFDRCxtQ0FBZTs7NkJBQUEsWUFBRztBQUNsQixtQ0FBUSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBRTt5QkFDdEM7O0FBQ0QsaUNBQWE7K0JBQUEsdUJBQUMsSUFBSSxFQUFDO0FBQ1gsdURBekNDLGVBQWUsK0NBeUNJLElBQUksRUFBRTtBQUMxQixnQ0FBSSxJQUFJLENBQUMsZUFBZSxFQUFFO0FBQ3RCLG9DQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7NkJBQ3ZDO0FBQ0QsZ0NBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNuQixvQ0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOzZCQUNqQzt5QkFDSjtBQUFBOzs7O3VCQWhESSxlQUFlO2VBQVMsUUFBUSIsImZpbGUiOiJkYXRhL2RvbWFpbi9kZXNjcmlwdGlvbml0ZW0uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==