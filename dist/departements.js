System.register(["./data/services/infodataservice", "./data/model/departementviewmodel"], function (_export) {
    var InfoDataService, DepartementViewModel, _createClass, _get, _inherits, _classCallCheck, Departements;

    return {
        setters: [function (_dataServicesInfodataservice) {
            InfoDataService = _dataServicesInfodataservice.InfoDataService;
        }, function (_dataModelDepartementviewmodel) {
            DepartementViewModel = _dataModelDepartementviewmodel.DepartementViewModel;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Departements = _export("Departements", (function (_DepartementViewModel) {
                function Departements(service) {
                    _classCallCheck(this, Departements);

                    _get(Object.getPrototypeOf(Departements.prototype), "constructor", this).call(this, service);
                }

                _inherits(Departements, _DepartementViewModel);

                _createClass(Departements, {
                    activate: {
                        value: function activate() {
                            if (this.items.length < 1) {
                                return this.refreshAll();
                            } else {
                                return true;
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

                return Departements;
            })(DepartementViewModel));
        }
    };
});
// departements.js
// class Departements
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydGVtZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQ1EsZUFBZSxFQUVuQixvQkFBb0Isa0RBSVgsWUFBWTs7OztBQU5qQiwyQkFBZSxnQ0FBZixlQUFlOztBQUVuQixnQ0FBb0Isa0NBQXBCLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7QUFJWCx3QkFBWTtBQUlWLHlCQUpGLFlBQVksQ0FJVCxPQUFPLEVBQUU7MENBSlosWUFBWTs7QUFLakIsK0NBTEssWUFBWSw2Q0FLWCxPQUFPLEVBQUU7aUJBQ2xCOzswQkFOUSxZQUFZOzs2QkFBWixZQUFZO0FBT3JCLDRCQUFROytCQUFBLG9CQUFHO0FBQ1AsZ0NBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLHVDQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs2QkFDNUIsTUFBTTtBQUNILHVDQUFPLElBQUksQ0FBQzs2QkFDZjt5QkFDSjs7O0FBWk0sMEJBQU07K0JBQUEsa0JBQUc7QUFDWixtQ0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3lCQUM1Qjs7Ozt1QkFIUSxZQUFZO2VBQVMsb0JBQW9CIiwiZmlsZSI6ImRlcGFydGVtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9