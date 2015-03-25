System.register(["./affbase"], function (_export) {
    var AffectationBase, _createClass, _get, _inherits, _classCallCheck, GroupeEvent;

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
            GroupeEvent = _export("GroupeEvent", (function (_AffectationBase) {
                //

                function GroupeEvent(oMap) {
                    _classCallCheck(this, GroupeEvent);

                    _get(Object.getPrototypeOf(GroupeEvent.prototype), "constructor", this).call(this, oMap);
                    this._profaffectationid = null;
                    this._name = null;
                    this._starttime = null;
                    this._endtime = null;
                    this._location = null;
                    this._coefficient = null;
                    if (oMap !== undefined && oMap !== null) {
                        if (oMap.profaffectationid !== undefined) {
                            this.profaffectationid = oMap.profaffectationid;
                        }
                        if (oMap.name !== undefined) {
                            this.name = oMap.name;
                        }
                        if (oMap.startTime !== undefined) {
                            this.startTime = oMap.startTime;
                        }
                        if (oMap.endTime !== undefined) {
                            this.endTime = oMap.endTime;
                        }
                        if (oMap.location !== undefined) {
                            this.location = oMap.location;
                        }
                        if (oMap.coefficient !== undefined) {
                            this.coefficient = oMap.coefficient;
                        }
                    }
                }

                _inherits(GroupeEvent, _AffectationBase);

                _createClass(GroupeEvent, {
                    type: {
                        get: function () {
                            return "groupeevent";
                        }
                    },
                    collection_name: {
                        //

                        get: function () {
                            return "groupeevents";
                        }
                    },
                    startTime: {
                        //

                        get: function () {
                            return this._starttime !== undefined ? this._starttime : null;
                        },
                        set: function (d) {
                            this._starttime = d !== undefined ? d : null;
                        }
                    },
                    has_startTime: {
                        get: function () {
                            return this.startTime !== null;
                        }
                    },
                    endTime: {
                        get: function () {
                            return this._endtime !== undefined ? this._endtime : null;
                        },
                        set: function (d) {
                            this._endtime = d !== undefined ? d : null;
                        }
                    },
                    has_endTime: {
                        get: function () {
                            return this.endTime !== null;
                        }
                    },
                    location: {
                        get: function () {
                            return this._location !== undefined ? this._location : null;
                        },
                        set: function (s) {
                            this._location = s !== undefined && s !== null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_location: {
                        get: function () {
                            return this.location !== null;
                        }
                    },
                    coefficient: {
                        get: function () {
                            return this._coef !== undefined ? this._coef : null;
                        },
                        set: function (s) {
                            this._coef = s !== undefined && s !== null && s > 0 ? s : null;
                        }
                    },
                    has_coefficient: {
                        get: function () {
                            return this.coefficient !== null && this.coefficient > 0;
                        }
                    },
                    name: {
                        get: function () {
                            return this._name !== undefined ? this._name : null;
                        },
                        set: function (s) {
                            this._name = s !== undefined && s !== null && s.trim().length > 0 ? s.trim().toLowerCase() : null;
                        }
                    },
                    has_name: {
                        get: function () {
                            return this.name !== null;
                        }
                    },
                    profaffectationid: {
                        get: function () {
                            return this._profaffectationid !== undefined ? this._profaffectationid : null;
                        },
                        set: function (s) {
                            this._profaffectationid = s !== undefined && s !== null && s.toString().trim().length > 0 ? s : null;
                        }
                    },
                    has_profaffectationid: {
                        get: function () {
                            return this.profaffectationid !== null;
                        }
                    },
                    is_storeable: {
                        //

                        get: function () {
                            if (this.has_startTime && this.has_endTime) {
                                if (this.startTime.getDate() > this.endTime.getDate()) {
                                    return false;
                                }
                            }
                            return _get(Object.getPrototypeOf(GroupeEvent.prototype), "is_storeable", this) && this.has_profaffectationid && this.has_name && this.has_date && this.has_genre;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(GroupeEvent.prototype), "to_insert_map", this).call(this, oMap);
                            if (this.has_profaffectationid) {
                                oMap.profaffectationid = this.profaffectationid;
                            }
                            if (this.has_name) {
                                oMap.name = this.name;
                            }
                            if (this.has_coefficient) {
                                oMap.coefficient = this.coefficient;
                            }
                            if (this.has_location) {
                                oMap.location = this.location;
                            }
                            if (this.has_startTime) {
                                oMap.startTime = this.startTime;
                            }
                            if (this.has_endTime) {
                                oMap.endTime = this.endTime;
                            }
                        } // to_insert_map

                    }
                });

                return GroupeEvent;
            })(AffectationBase));
        }
    };
});
// groupeevent.js
//
// class GroupeEvent
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2dyb3VwZWV2ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFFUSxlQUFlLGtEQUVWLFdBQVc7Ozs7QUFGaEIsMkJBQWUsWUFBZixlQUFlOzs7Ozs7Ozs7Ozs7OztBQUVWLHVCQUFXOzs7QUFFWCx5QkFGQSxXQUFXLENBRVYsSUFBSSxFQUFFOzBDQUZQLFdBQVc7O0FBR2xCLCtDQUhPLFdBQVcsNkNBR1osSUFBSSxFQUFFO0FBQ1osd0JBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7QUFDL0Isd0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLHdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2Qix3QkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsd0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLHdCQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUN6Qix3QkFBSSxBQUFDLElBQUksS0FBSyxTQUFTLElBQU0sSUFBSSxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ3pDLDRCQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLEVBQUU7QUFDdEMsZ0NBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7eUJBQ25EO0FBQ0QsNEJBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7QUFDekIsZ0NBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzt5QkFDekI7QUFDRCw0QkFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtBQUM5QixnQ0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO3lCQUNuQztBQUNELDRCQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO0FBQzVCLGdDQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7eUJBQy9CO0FB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QzlCLElBQUksQ0FBQyxTQUFTLENBQUU7eUJBQ3RCOztBQUNELGlDQUFhOytCQUFBLHVCQUFDLElBQUksRUFBRTtBQUNoQix1REE1R08sV0FBVywrQ0E0R0UsSUFBSSxFQUFFO0FBQzFCLGdDQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtBQUM1QixvQ0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs2QkFDbkQ7QUFDRCxnQ0FBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2Ysb0NBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs2QkFDekI7QUFDRCxnQ0FBSSxJQUFJLENBQUMsZUFBZSxFQUFFO0FBQ3RCLG9DQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7NkJBQ3ZDO0FBQ0QsZ0NBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNuQixvQ0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOzZCQUNqQztBQUNELGdDQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDcEIsb0NBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs2QkFDbkM7QUFDRCxnQ0FBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2xCLG9DQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7NkJBQy9CO3lCQUNKO0FBQUE7Ozs7dUJBL0hVLFdBQVc7ZUFBUyxlQUFlIiwiZmlsZSI6ImRhdGEvZG9tYWluL2dyb3VwZWV2ZW50LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=