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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvbW9kZWwvdmlld21vZGVsYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBRUksUUFBUSxpQ0FJQyxhQUFhOzs7O0FBSnRCLG9CQUFRLGFBQVIsUUFBUTs7Ozs7Ozs7OztBQUlDLHlCQUFhO0FBQ1gseUJBREYsYUFBYSxDQUNWLE9BQU8sRUFBRTswQ0FEWixhQUFhOztBQUVkLHdCQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUMzQix3QkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsd0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLHdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQix3QkFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7aUJBQ2xCOzs2QkFQSSxhQUFhO0FBUXRCLCtCQUFXOzsrQkFBQSx1QkFBRTtBQUNULGdDQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzt5QkFDbEI7O0FBQ0QsZ0NBQVk7K0JBQUEsd0JBQUUsRUFDYjs7QUFDRCwyQkFBTzsrQkFBQSxpQkFBQyxPQUFPLEVBQUU7QUFDYixtQ0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNwQzs7QUFPRCw0QkFBUTs2QkFBQSxZQUFHO0FBQ1AsbUNBQVEsQUFBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBTSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQUFBQyxJQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxDQUFFO3lCQUNsRzs7QUFJRyx5QkFBSzs2QkFIQSxZQUFHO0FBQ1IsbUNBQU8sQUFBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsR0FBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt5QkFDM0Q7NkJBQ1EsVUFBQyxDQUFDLEVBQUU7QUFDVCxnQ0FBSSxDQUFDLE1BQU0sR0FBRyxBQUFDLEFBQUMsQ0FBQyxLQUFLLFNBQVMsSUFDMUIsQ0FBQyxLQUFLLElBQUksQUFBQyxJQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEdBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQzt5QkFDaEU7O0FBQ0csNEJBQVE7NkJBQUEsWUFBRztBQUNQLG1DQUFRLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFFO3lCQUMvQjs7QUFLRCx3QkFBSTs7OzZCQUhBLFlBQUc7QUFDUCxtQ0FBTyxBQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxHQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3lCQUMzRDs2QkFDTyxVQUFDLENBQUMsRUFBRTtBQUNSLGdDQUFJLENBQUMsS0FBSyxHQUFHLEFBQUMsQUFBQyxDQUFDLEtBQUssU0FBUyxJQUN6QixDQUFDLEtBQUssSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsR0FBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO3lCQUNoRTs7QUFDRywyQkFBTzs2QkFBQSxZQUFHO0FBQ04sbUNBQVEsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUU7eUJBQy9COztBQUVMLGdDQUFZOzs7K0JBQUEsc0JBQUMsT0FBTyxFQUFFO0FBQ2QsbUNBQU8sSUFBSSxDQUFDO3lCQUNmOztBQUNMLCtCQUFXOytCQUFBLHVCQUFFO0FBQ1QsZ0NBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3lCQUNyQjs7QUFFRCxzQ0FBa0I7OzsrQkFBQSw0QkFBQyxHQUFHLEVBQUU7QUFDaEIsZ0NBQUksQUFBQyxHQUFHLEtBQUssU0FBUyxJQUFNLEdBQUcsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUN2QyxvQ0FBSSxBQUFDLEdBQUcsQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFNLEdBQUcsQ0FBQyxPQUFPLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDdkQsd0NBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztpQ0FDNUIsTUFDSSxJQUFJLEFBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQU0sR0FBRyxDQUFDLEdBQUcsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUNwRCx3Q0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO2lDQUN4QixNQUNJLElBQUksQUFBQyxHQUFHLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBTSxHQUFHLENBQUMsVUFBVSxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ2xFLHdDQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7aUNBQy9CLE1BQ0k7QUFDRCx3Q0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7aUNBQy9COzZCQUNKO3lCQUNKO0FBQUE7OztBQXJERSx5QkFBSzsrQkFBQSxlQUFDLE9BQU8sRUFBRTtBQUNsQixvQ0FBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDM0I7O0FBQ00sMEJBQU07K0JBQUEsZ0JBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtBQUM3QixtQ0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzt5QkFDN0M7Ozs7dUJBckJRLGFBQWEiLCJmaWxlIjoiZGF0YS9tb2RlbC92aWV3bW9kZWxiYXNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=