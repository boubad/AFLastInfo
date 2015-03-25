System.register(["./data/services/infodataservice", "./data/model/uniteviewmodel"], function (_export) {
    var InfoDataService, UniteViewModel, _createClass, _get, _inherits, _classCallCheck, Unites;

    return {
        setters: [function (_dataServicesInfodataservice) {
            InfoDataService = _dataServicesInfodataservice.InfoDataService;
        }, function (_dataModelUniteviewmodel) {
            UniteViewModel = _dataModelUniteviewmodel.UniteViewModel;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Unites = _export("Unites", (function (_UniteViewModel) {
                function Unites(service) {
                    _classCallCheck(this, Unites);

                    _get(Object.getPrototypeOf(Unites.prototype), "constructor", this).call(this, service);
                }

                _inherits(Unites, _UniteViewModel);

                _createClass(Unites, {
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

                return Unites;
            })(UniteViewModel));
        }
    };
});
// unites.js
// class Unites
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQ1EsZUFBZSxFQUVuQixjQUFjLGtEQUlMLE1BQU07Ozs7QUFOWCwyQkFBZSxnQ0FBZixlQUFlOztBQUVuQiwwQkFBYyw0QkFBZCxjQUFjOzs7Ozs7Ozs7Ozs7OztBQUlMLGtCQUFNO0FBSUoseUJBSkYsTUFBTSxDQUlILE9BQU8sRUFBRTswQ0FKWixNQUFNOztBQUtYLCtDQUxLLE1BQU0sNkNBS0wsT0FBTyxFQUFFO2lCQUNsQjs7MEJBTlEsTUFBTTs7NkJBQU4sTUFBTTtBQU9mLDRCQUFROytCQUFBLGtCQUFDLE1BQU0sRUFBRTtBQUNiLGdDQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFDO0FBQ3hCLG9DQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7NkJBQ2xDO3lCQUNKOzs7QUFWTSwwQkFBTTsrQkFBQSxrQkFBRztBQUNaLG1DQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7eUJBQzVCOzs7O3VCQUhRLE1BQU07ZUFBUyxjQUFjIiwiZmlsZSI6InVuaXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9