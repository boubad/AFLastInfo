System.register(["./data/services/infodataservice", "./data/model/semestreviewmodel"], function (_export) {
    var InfoDataService, SemestreViewModel, _createClass, _get, _inherits, _classCallCheck, Semestres;

    return {
        setters: [function (_dataServicesInfodataservice) {
            InfoDataService = _dataServicesInfodataservice.InfoDataService;
        }, function (_dataModelSemestreviewmodel) {
            SemestreViewModel = _dataModelSemestreviewmodel.SemestreViewModel;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Semestres = _export("Semestres", (function (_SemestreViewModel) {
                function Semestres(service) {
                    _classCallCheck(this, Semestres);

                    _get(Object.getPrototypeOf(Semestres.prototype), "constructor", this).call(this, service);
                }

                _inherits(Semestres, _SemestreViewModel);

                _createClass(Semestres, {
                    activate: {
                        value: function activate(params) {
                            if (params.id !== undefined) {
                                this.anneeid = params.id;
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

                return Semestres;
            })(SemestreViewModel));
        }
    };
});
// semestres.js
// class Semestres
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbWVzdHJlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBRUksZUFBZSxFQUlmLGlCQUFpQixrREFJUixTQUFTOzs7O0FBUmxCLDJCQUFlLGdDQUFmLGVBQWU7O0FBSWYsNkJBQWlCLCtCQUFqQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FBSVIscUJBQVM7QUFJUCx5QkFKRixTQUFTLENBSU4sT0FBTyxFQUFFOzBDQUpaLFNBQVM7O0FBS2QsK0NBTEssU0FBUyw2Q0FLUixPQUFPLEVBQUU7aUJBQ2xCOzswQkFOUSxTQUFTOzs2QkFBVCxTQUFTO0FBT2xCLDRCQUFROytCQUFBLGtCQUFDLE1BQU0sRUFBRTtBQUNiLGdDQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO0FBQ3pCLG9DQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7NkJBQzVCO3lCQUNKOzs7QUFWTSwwQkFBTTsrQkFBQSxrQkFBRztBQUNaLG1DQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7eUJBQzVCOzs7O3VCQUhRLFNBQVM7ZUFBUyxpQkFBaUIiLCJmaWxlIjoic2VtZXN0cmVzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=