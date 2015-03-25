System.register(["./data/services/infodataservice", "./data/model/anneeviewmodel"], function (_export) {
    var InfoDataService, AnneeViewModel, _createClass, _get, _inherits, _classCallCheck, Annees;

    return {
        setters: [function (_dataServicesInfodataservice) {
            InfoDataService = _dataServicesInfodataservice.InfoDataService;
        }, function (_dataModelAnneeviewmodel) {
            AnneeViewModel = _dataModelAnneeviewmodel.AnneeViewModel;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Annees = _export("Annees", (function (_AnneeViewModel) {
                function Annees(service) {
                    _classCallCheck(this, Annees);

                    _get(Object.getPrototypeOf(Annees.prototype), "constructor", this).call(this, service);
                }

                _inherits(Annees, _AnneeViewModel);

                _createClass(Annees, {
                    activate: {
                        value: function activate(params) {
                            if (params.id !== undefined) {
                                this.departementid = params.id;
                            }
                        }
                    }
                }, {
                    inject: {
                        value: function inject() {
                            return [InfoDataService];
                        }
                    }
                });

                return Annees;
            })(AnneeViewModel));
        }
    };
});
// annees.js
// class Annees
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFubmVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBRUksZUFBZSxFQUlmLGNBQWMsa0RBSUwsTUFBTTs7OztBQVJmLDJCQUFlLGdDQUFmLGVBQWU7O0FBSWYsMEJBQWMsNEJBQWQsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUFJTCxrQkFBTTtBQUlKLHlCQUpGLE1BQU0sQ0FJSCxPQUFPLEVBQUU7MENBSlosTUFBTTs7QUFLWCwrQ0FMSyxNQUFNLDZDQUtMLE9BQU8sRUFBRTtpQkFDbEI7OzBCQU5RLE1BQU07OzZCQUFOLE1BQU07QUFPZiw0QkFBUTsrQkFBQSxrQkFBQyxNQUFNLEVBQUU7QUFDYixnQ0FBSSxNQUFNLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFBRTtBQUN6QixvQ0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDOzZCQUNsQzt5QkFDSjs7O0FBVk0sMEJBQU07K0JBQUEsa0JBQUc7QUFDWixtQ0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3lCQUM1Qjs7Ozt1QkFIUSxNQUFNO2VBQVMsY0FBYyIsImZpbGUiOiJhbm5lZXMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==