System.register(["../domain/groupe", "./depsiglenameviewmodel"], function (_export) {
    var Groupe, DepartementSigleNameViewModel, _createClass, _get, _inherits, _classCallCheck, GroupeViewModel;

    return {
        setters: [function (_domainGroupe) {
            Groupe = _domainGroupe.Groupe;
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
            GroupeViewModel = _export("GroupeViewModel", (function (_DepartementSigleNameViewModel) {
                function GroupeViewModel(dataservice) {
                    _classCallCheck(this, GroupeViewModel);

                    _get(Object.getPrototypeOf(GroupeViewModel.prototype), "constructor", this).call(this, dataservice, new Groupe(), "Groupes");
                }

                _inherits(GroupeViewModel, _DepartementSigleNameViewModel);

                _createClass(GroupeViewModel, {
                    update_menu: { // constructor

                        value: function update_menu() {
                            var mm = [];
                            mm.push({
                                refer: "#deps",
                                title: "Départements",
                                desc: "Départements"
                            });
                            this.menu = mm;
                        }
                    }
                });

                return GroupeViewModel;
            })(DepartementSigleNameViewModel));
        }
    };
});
// groupeviewmodel.js
// class GroupeViewModel
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvbW9kZWwvZ3JvdXBldmlld21vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFFSSxNQUFNLEVBSU4sNkJBQTZCLGtEQUlwQixlQUFlOzs7O0FBUnhCLGtCQUFNLGlCQUFOLE1BQU07O0FBSU4seUNBQTZCLDBCQUE3Qiw2QkFBNkI7Ozs7Ozs7Ozs7Ozs7O0FBSXBCLDJCQUFlO0FBRWIseUJBRkYsZUFBZSxDQUVaLFdBQVcsRUFBRTswQ0FGaEIsZUFBZTs7QUFHaEIsK0NBSEMsZUFBZSw2Q0FHVixXQUFXLEVBQUUsSUFBSSxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUU7aUJBQy9DOzswQkFKSSxlQUFlOzs2QkFBZixlQUFlO0FBS3hCLCtCQUFXOzsrQkFBQSx1QkFBRztBQUNWLGdDQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDWiw4QkFBRSxDQUFDLElBQUksQ0FBQztBQUNKLHFDQUFLLEVBQUUsT0FBTztBQUNkLHFDQUFLLEVBQUUsY0FBYztBQUNyQixvQ0FBSSxFQUFFLGNBQWM7NkJBQ3ZCLENBQUMsQ0FBQztBQUNILGdDQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzt5QkFDbEI7Ozs7dUJBYlEsZUFBZTtlQUFTLDZCQUE2QiIsImZpbGUiOiJkYXRhL21vZGVsL2dyb3VwZXZpZXdtb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9