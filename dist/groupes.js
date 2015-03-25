System.register(["./data/services/infodataservice", "./data/model/groupeviewmodel"], function (_export) {
    var InfoDataService, GroupeViewModel, _createClass, _get, _inherits, _classCallCheck, Groupes;

    return {
        setters: [function (_dataServicesInfodataservice) {
            InfoDataService = _dataServicesInfodataservice.InfoDataService;
        }, function (_dataModelGroupeviewmodel) {
            GroupeViewModel = _dataModelGroupeviewmodel.GroupeViewModel;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Groupes = _export("Groupes", (function (_GroupeViewModel) {
                function Groupes(service) {
                    _classCallCheck(this, Groupes);

                    _get(Object.getPrototypeOf(Groupes.prototype), "constructor", this).call(this, service);
                }

                _inherits(Groupes, _GroupeViewModel);

                _createClass(Groupes, {
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

                return Groupes;
            })(GroupeViewModel));
        }
    };
});
// class Groupes
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFRLGVBQWUsRUFFbkIsZUFBZSxrREFJTixPQUFPOzs7O0FBTlosMkJBQWUsZ0NBQWYsZUFBZTs7QUFFbkIsMkJBQWUsNkJBQWYsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUFJTixtQkFBTztBQUlMLHlCQUpGLE9BQU8sQ0FJSixPQUFPLEVBQUU7MENBSlosT0FBTzs7QUFLWiwrQ0FMSyxPQUFPLDZDQUtOLE9BQU8sRUFBRTtpQkFDbEI7OzBCQU5RLE9BQU87OzZCQUFQLE9BQU87QUFPaEIsNEJBQVE7K0JBQUEsa0JBQUMsTUFBTSxFQUFFO0FBQ2IsZ0NBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUM7QUFDeEIsb0NBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQzs2QkFDbEM7eUJBQ0o7OztBQVZNLDBCQUFNOytCQUFBLGtCQUFHO0FBQ1osbUNBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzt5QkFDNUI7Ozs7dUJBSFEsT0FBTztlQUFTLGVBQWUiLCJmaWxlIjoiZ3JvdXBlcy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9