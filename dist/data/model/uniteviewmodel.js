System.register(["../domain/unite", "./depsiglenameviewmodel"], function (_export) {
    var Unite, DepartementSigleNameViewModel, _createClass, _get, _inherits, _classCallCheck, UniteViewModel;

    return {
        setters: [function (_domainUnite) {
            Unite = _domainUnite.Unite;
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
            UniteViewModel = _export("UniteViewModel", (function (_DepartementSigleNameViewModel) {
                function UniteViewModel(dataservice) {
                    _classCallCheck(this, UniteViewModel);

                    _get(Object.getPrototypeOf(UniteViewModel.prototype), "constructor", this).call(this, dataservice, new Unite(), "Unités");
                }

                _inherits(UniteViewModel, _DepartementSigleNameViewModel);

                _createClass(UniteViewModel, {
                    update_menu: { // constructor

                        value: function update_menu() {
                            var mm = [];
                            mm.push({
                                refer: "#deps",
                                title: "Départements",
                                desc: "Départements"
                            });
                            var item = this.current;
                            if (item !== undefined && item !== null && item.has_id) {
                                var id = item.id;
                                mm.push({
                                    refer: "#matieres/" + id,
                                    title: "Matières",
                                    desc: "Matières"
                                });
                            } // item
                            this.menu = mm;
                        }
                    }
                });

                return UniteViewModel;
            })(DepartementSigleNameViewModel));
        }
    };
});
// uniteviewmodel.js
// class UniteViewModel
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvbW9kZWwvdW5pdGV2aWV3bW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUNRLEtBQUssRUFDTCw2QkFBNkIsa0RBRXhCLGNBQWM7Ozs7QUFIbkIsaUJBQUssZ0JBQUwsS0FBSzs7QUFDTCx5Q0FBNkIsMEJBQTdCLDZCQUE2Qjs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsMEJBQWM7QUFFWix5QkFGRixjQUFjLENBRVgsV0FBVyxFQUFFOzBDQUZoQixjQUFjOztBQUdmLCtDQUhDLGNBQWMsNkNBR1QsV0FBVyxFQUFFLElBQUksS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFO2lCQUM3Qzs7MEJBSkksY0FBYzs7NkJBQWQsY0FBYztBQUt2QiwrQkFBVzs7K0JBQUEsdUJBQUc7QUFDVixnQ0FBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ1gsOEJBQUUsQ0FBQyxJQUFJLENBQUM7QUFDRCxxQ0FBSyxFQUFFLE9BQU87QUFDZCxxQ0FBSyxFQUFFLGNBQWM7QUFDckIsb0NBQUksRUFBRSxjQUFjOzZCQUN2QixDQUFDLENBQUM7QUFDUCxnQ0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixnQ0FBSSxBQUFDLElBQUksS0FBSyxTQUFTLElBQU0sSUFBSSxLQUFLLElBQUksQUFBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDeEQsb0NBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDakIsa0NBQUUsQ0FBQyxJQUFJLENBQUM7QUFDSix5Q0FBSyxFQUFFLFlBQVksR0FBRyxFQUFFO0FBQ3hCLHlDQUFLLEVBQUUsVUFBVTtBQUNqQix3Q0FBSSxFQUFFLFVBQVU7aUNBQ25CLENBQUMsQ0FBQzs2QkFDTjtBQUNELGdDQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzt5QkFDbEI7Ozs7dUJBdEJRLGNBQWM7ZUFBUyw2QkFBNkIiLCJmaWxlIjoiZGF0YS9tb2RlbC91bml0ZXZpZXdtb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9