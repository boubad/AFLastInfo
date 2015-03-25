System.register(["./affbase"], function (_export) {
    var AffectationBase, _createClass, _get, _inherits, _classCallCheck, EtudEvent;

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
            EtudEvent = _export("EtudEvent", (function (_AffectationBase) {
                //

                function EtudEvent(oMap) {
                    _classCallCheck(this, EtudEvent);

                    _get(Object.getPrototypeOf(EtudEvent.prototype), "constructor", this).call(this, oMap);
                    this._groupeeventid = null;
                    this._etudaffectationid = null;
                    this._note = null;
                    if (oMap !== undefined && oMap !== null) {}
                    if (oMap.groupeeventid !== undefined) {
                        this.groupeeventid = oMap.groupeeventid;
                    }
                    if (oMap.etudaffectationid !== undefined) {
                        this.etudaffectationid = oMap.etudaffectationid;
                    }
                    if (oMap.note !== undefined) {
                        this.note = oMap.note;
                    }
                }

                _inherits(EtudEvent, _AffectationBase);

                _createClass(EtudEvent, {
                    type: {
                        get: function () {
                            return "etudevent";
                        }
                    },
                    collection_name: { //

                        get: function () {
                            return "etudevents";
                        }
                    },
                    note: {
                        //

                        get: function () {
                            return this._note !== undefined ? this._note : null;
                        },
                        set: function (s) {
                            this._note = s !== undefined && s !== null ? s : null;
                        }
                    },
                    has_note: {
                        get: function () {
                            return this.note !== null;
                        }
                    },
                    etudaffectationid: {
                        get: function () {
                            return this._etudaffectationid !== undefined ? this._etudaffectationid : null;
                        },
                        set: function (s) {
                            this._etudaffectationid = s !== undefined && s !== null && s.toString().trim().length > 0 ? s : null;
                        }
                    },
                    has_etudaffectationid: {
                        get: function () {
                            return this.etudaffectationid !== null;
                        }
                    },
                    groupeeventid: {
                        //

                        get: function () {
                            return this._groupeeventid !== undefined ? this._groupeeventid : null;
                        },
                        set: function (s) {
                            this._groupeeventid = s !== undefined && s !== null && s.toString().trim().length > 0 ? s : null;
                        }
                    },
                    has_groupeeventid: {
                        get: function () {
                            return this.groupeeventid !== null;
                        }
                    },
                    is_storeable: {
                        //

                        get: function () {
                            return _get(Object.getPrototypeOf(EtudEvent.prototype), "is_storeable", this) && this.has_etudaffectationid && this.has_groupeeventid && this.has_etudiantid;
                        }
                    },
                    to_insert_map: {
                        value: function to_insert_map(oMap) {
                            _get(Object.getPrototypeOf(EtudEvent.prototype), "to_insert_map", this).call(this, oMap);
                            if (this.has_note) {
                                oMap.note = this.note;
                            }
                            if (this.has_groupeeventid) {
                                oMap.groupeeventid = this.groupeeventid;
                            }
                            if (this.has_etudaffectationid) {
                                oMap.etudaffectationid = this.etudaffectationid;
                            }
                        } // to_insert_map

                    }
                });

                return EtudEvent;
            })(AffectationBase));
        }
    };
});
//etudevent.js
//
//
// class EtudEvent
//# sourceMappingURL=data:application/json;base64,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QUFDLEdBQUcsSUFBSSxDQUFDO3lCQUM1Rzs7QUFDRyxxQ0FBaUI7NkJBQUEsWUFBRztBQUNwQixtQ0FBUSxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBRTt5QkFDeEM7O0FBR0csZ0NBQVk7Ozs2QkFBQSxZQUFHO0FBQ2YsbUNBQVEsMkJBeERGLFNBQVMsc0NBeURmLElBQUksQ0FBQyxxQkFBcUIsSUFDMUIsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUU7eUJBQ2xEOztBQUNELGlDQUFhOytCQUFBLHVCQUFDLElBQUksRUFBRTtBQUNoQix1REE3RE0sU0FBUywrQ0E2REssSUFBSSxFQUFFO0FBQzFCLGdDQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDZixvQ0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOzZCQUN6QjtBQUNELGdDQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUN4QixvQ0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDOzZCQUMzQztBQUNELGdDQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtBQUM1QixvQ0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs2QkFDbkQ7eUJBQ0o7QUFBQTs7Ozt1QkF2RVMsU0FBUztlQUFTLGVBQWUiLCJmaWxlIjoiZGF0YS9kb21haW4vZXR1ZGV2ZW50LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=