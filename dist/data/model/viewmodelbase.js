System.register(["./uihelper"], function (_export) {
    var UIHelper, _createClass, _classCallCheck, ViewModelBase;

    return {
        setters: [function (_uihelper) {
            UIHelper = _uihelper.UIHelper;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            //
            ViewModelBase = _export("ViewModelBase", (function () {
                function ViewModelBase(service) {
                    _classCallCheck(this, ViewModelBase);

                    this.dataService = service;
                    this.title = null;
                    this._error = null;
                    this._info = null;
                    this.menu = [];
                }

                _createClass(ViewModelBase, {
                    update_menu: { // constructor

                        value: function update_menu() {
                            this.menu = [];
                        }
                    },
                    update_title: {
                        value: function update_title() {}
                    },
                    confirm: {
                        value: function confirm(message) {
                            return UIHelper.confirm(message);
                        }
                    },
                    hasTitle: {
                        get: function () {
                            return this.title !== undefined && this.title !== null && this.title.trim().length > 0;
                        }
                    },
                    error: {
                        get: function () {
                            return this._error !== undefined ? this._error : null;
                        },
                        set: function (s) {
                            this._error = s !== undefined && s !== null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    hasError: {
                        get: function () {
                            return this.error != null;
                        }
                    },
                    info: {
                        //

                        get: function () {
                            return this._info !== "undefined" ? this._info : null;
                        },
                        set: function (s) {
                            this._info = s !== undefined && s !== null && s.trim().length > 0 ? s.trim() : null;
                        }
                    },
                    hasInfo: {
                        get: function () {
                            return this.info !== null;
                        }
                    },
                    ask_question: {
                        //

                        value: function ask_question(message) {
                            return true;
                        }
                    },
                    clear_error: {
                        value: function clear_error() {
                            this.error = null;
                        }
                    },
                    internal_set_error: {
                        //

                        value: function internal_set_error(err) {
                            if (err !== undefined && err !== null) {
                                if (err.message !== undefined && err.message !== null) {
                                    this.error = err.message;
                                } else if (err.msg !== undefined && err.msg !== null) {
                                    this.error = err.msg;
                                } else if (err.statusText !== undefined && err.statusText !== null) {
                                    this.error = err.statusText;
                                } else {
                                    this.error = err.toString();
                                }
                            }
                        } // _internal_setÃƒÂ§error

                    }
                }, {
                    alert: {
                        value: function alert(message) {
                            UIHelper.alert(message);
                        }
                    },
                    prompt: {
                        value: function prompt(message, response) {
                            return UIHelper.prompt(message, response);
                        }
                    }
                });

                return ViewModelBase;
            })());
        }
    };
});
// viewmodelbase.js
// ViewModelBase
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvbW9kZWwvdmlld21vZGVsYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBRUksUUFBUSxpQ0FLQyxhQUFhOzs7O0FBTHRCLG9CQUFRLGFBQVIsUUFBUTs7Ozs7Ozs7Ozs7QUFLQyx5QkFBYTtBQUNYLHlCQURGLGFBQWEsQ0FDVixPQUFPLEVBQUU7MENBRFosYUFBYTs7QUFFZCx3QkFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDM0Isd0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLHdCQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQix3QkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsd0JBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2lCQUNsQjs7NkJBUEksYUFBYTtBQVF0QiwrQkFBVzs7K0JBQUEsdUJBQUU7QUFDVCxnQ0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7eUJBQ2xCOztBQUNELGdDQUFZOytCQUFBLHdCQUFFLEVBQ2I7O0FBQ0QsMkJBQU87K0JBQUEsaUJBQUMsT0FBTyxFQUFFO0FBQ2IsbUNBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDcEM7O0FBT0QsNEJBQVE7NkJBQUEsWUFBRztBQUNQLG1DQUFRLEFBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQU0sSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLEFBQUMsSUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsQ0FBRTt5QkFDbEc7O0FBSUcseUJBQUs7NkJBSEEsWUFBRztBQUNSLG1DQUFPLEFBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEdBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7eUJBQzNEOzZCQUNRLFVBQUMsQ0FBQyxFQUFFO0FBQ1QsZ0NBQUksQ0FBQyxNQUFNLEdBQUcsQUFBQyxBQUFDLENBQUMsS0FBSyxTQUFTLElBQzFCLENBQUMsS0FBSyxJQUFJLEFBQUMsSUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxHQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7eUJBQ2hFOztBQUNHLDRCQUFROzZCQUFBLFlBQUc7QUFDUCxtQ0FBUSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBRTt5QkFDL0I7O0FBS0Qsd0JBQUk7Ozs2QkFIQSxZQUFHO0FBQ1AsbUNBQU8sQUFBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsR0FBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzt5QkFDM0Q7NkJBQ08sVUFBQyxDQUFDLEVBQUU7QUFDUixnQ0FBSSxDQUFDLEtBQUssR0FBRyxBQUFDLEFBQUMsQ0FBQyxLQUFLLFNBQVMsSUFDekIsQ0FBQyxLQUFLLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEdBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQzt5QkFDaEU7O0FBQ0csMkJBQU87NkJBQUEsWUFBRztBQUNOLG1DQUFRLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFFO3lCQUMvQjs7QUFFTCxnQ0FBWTs7OytCQUFBLHNCQUFDLE9BQU8sRUFBRTtBQUNkLG1DQUFPLElBQUksQ0FBQzt5QkFDZjs7QUFDTCwrQkFBVzsrQkFBQSx1QkFBRTtBQUNULGdDQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzt5QkFDckI7O0FBRUQsc0NBQWtCOzs7K0JBQUEsNEJBQUMsR0FBRyxFQUFFO0FBQ2hCLGdDQUFJLEFBQUMsR0FBRyxLQUFLLFNBQVMsSUFBTSxHQUFHLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDdkMsb0NBQUksQUFBQyxHQUFHLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBTSxHQUFHLENBQUMsT0FBTyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ3ZELHdDQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7aUNBQzVCLE1BQ0ksSUFBSSxBQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDcEQsd0NBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztpQ0FDeEIsTUFDSSxJQUFJLEFBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQU0sR0FBRyxDQUFDLFVBQVUsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUNsRSx3Q0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO2lDQUMvQixNQUNJO0FBQ0Qsd0NBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2lDQUMvQjs2QkFDSjt5QkFDSjtBQUFBOzs7QUFyREUseUJBQUs7K0JBQUEsZUFBQyxPQUFPLEVBQUU7QUFDbEIsb0NBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQzNCOztBQUNNLDBCQUFNOytCQUFBLGdCQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7QUFDN0IsbUNBQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7eUJBQzdDOzs7O3VCQXJCUSxhQUFhIiwiZmlsZSI6ImRhdGEvbW9kZWwvdmlld21vZGVsYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9