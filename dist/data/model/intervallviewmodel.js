System.register(["../domain/departement", "./depsiglenameviewmodel"], function (_export) {
    var Departement, DepartementSigleNameViewModel, _createClass, _get, _inherits, _classCallCheck, IntervallViewModel;

    return {
        setters: [function (_domainDepartement) {
            Departement = _domainDepartement.Departement;
        }, function (_depsiglenameviewmodel) {
            DepartementSigleNameViewModel = _depsiglenameviewmodel.DepartementSigleNameViewModel;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            IntervallViewModel = _export("IntervallViewModel", (function (_DepartementSigleNameViewModel) {
                function IntervallViewModel(dataService, model, baseTitle) {
                    _classCallCheck(this, IntervallViewModel);

                    _get(Object.getPrototypeOf(IntervallViewModel.prototype), "constructor", this).call(this, dataService, model, baseTitle);
                }

                _inherits(IntervallViewModel, _DepartementSigleNameViewModel);

                _createClass(IntervallViewModel, {
                    startDate: { // constructor

                        get: function () {
                            return this.current !== null ? this.current.startDate : null;
                        },
                        set: function (d) {
                            if (this.current !== null) {
                                this.current.startDate = d;
                            }
                        }
                    },
                    endDate: {
                        get: function () {
                            return this.current !== null ? this.current.endDate : null;
                        },
                        set: function (d) {
                            if (this.current !== null) {
                                this.current.endDate = d;
                            }
                        }
                    }
                });

                return IntervallViewModel;
            })(DepartementSigleNameViewModel));
        }
    };
});
//depsiglenameviewmodel.js
//
// class IntervallViewModel
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvbW9kZWwvaW50ZXJ2YWxsdmlld21vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFHSSxXQUFXLEVBSVgsNkJBQTZCLGtEQUlwQixrQkFBa0I7Ozs7QUFSM0IsdUJBQVcsc0JBQVgsV0FBVzs7QUFJWCx5Q0FBNkIsMEJBQTdCLDZCQUE2Qjs7Ozs7Ozs7Ozs7Ozs7QUFJcEIsOEJBQWtCO0FBQ2hCLHlCQURGLGtCQUFrQixDQUNmLFdBQVcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFOzBDQURsQyxrQkFBa0I7O0FBRW5CLCtDQUZDLGtCQUFrQiw2Q0FFYixXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtpQkFDeEM7OzBCQUhJLGtCQUFrQjs7NkJBQWxCLGtCQUFrQjtBQU92Qiw2QkFBUzs7NkJBSEEsWUFBRztBQUNaLG1DQUFPLEFBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLEdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3lCQUNsRTs2QkFDWSxVQUFDLENBQUMsRUFBRTtBQUNiLGdDQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFDO0FBQ3RCLG9DQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7NkJBQzlCO3lCQUNKOztBQUlHLDJCQUFPOzZCQUhBLFlBQUc7QUFDVixtQ0FBTyxBQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzt5QkFDaEU7NkJBQ1UsVUFBQyxDQUFDLEVBQUU7QUFDWCxnQ0FBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBQztBQUN0QixvQ0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOzZCQUM1Qjt5QkFDSjs7Ozt1QkFuQlEsa0JBQWtCO2VBQVMsNkJBQTZCIiwiZmlsZSI6ImRhdGEvbW9kZWwvaW50ZXJ2YWxsdmlld21vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=