System.register(["../domain/annee", "./intervallviewmodel"], function (_export) {
    var Annee, IntervallViewModel, _createClass, _get, _inherits, _classCallCheck, AnneeViewModel;

    return {
        setters: [function (_domainAnnee) {
            Annee = _domainAnnee.Annee;
        }, function (_intervallviewmodel) {
            IntervallViewModel = _intervallviewmodel.IntervallViewModel;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            AnneeViewModel = _export("AnneeViewModel", (function (_IntervallViewModel) {
                function AnneeViewModel(dataservice) {
                    _classCallCheck(this, AnneeViewModel);

                    _get(Object.getPrototypeOf(AnneeViewModel.prototype), "constructor", this).call(this, dataservice, new Annee(), "Années");
                }

                _inherits(AnneeViewModel, _IntervallViewModel);

                _createClass(AnneeViewModel, {
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
                                    refer: "#semestres/" + id,
                                    title: "Semestres",
                                    desc: "Semestres"
                                });
                            } // item
                            this.menu = mm;
                        }
                    }
                });

                return AnneeViewModel;
            })(IntervallViewModel));
        }
    };
});
// anneeviewmodel.js
// class AnneeViewModel
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvbW9kZWwvYW5uZWV2aWV3bW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUNRLEtBQUssRUFDTCxrQkFBa0Isa0RBRWIsY0FBYzs7OztBQUhuQixpQkFBSyxnQkFBTCxLQUFLOztBQUNMLDhCQUFrQix1QkFBbEIsa0JBQWtCOzs7Ozs7Ozs7Ozs7OztBQUViLDBCQUFjO0FBRVoseUJBRkYsY0FBYyxDQUVYLFdBQVcsRUFBRTswQ0FGaEIsY0FBYzs7QUFHZiwrQ0FIQyxjQUFjLDZDQUdULFdBQVcsRUFBRSxJQUFJLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRTtpQkFDN0M7OzBCQUpJLGNBQWM7OzZCQUFkLGNBQWM7QUFLdkIsK0JBQVc7OytCQUFBLHVCQUFHO0FBQ1YsZ0NBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNYLDhCQUFFLENBQUMsSUFBSSxDQUFDO0FBQ0QscUNBQUssRUFBRSxPQUFPO0FBQ2QscUNBQUssRUFBRSxjQUFjO0FBQ3JCLG9DQUFJLEVBQUUsY0FBYzs2QkFDdkIsQ0FBQyxDQUFDO0FBQ1AsZ0NBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsZ0NBQUksQUFBQyxJQUFJLEtBQUssU0FBUyxJQUFNLElBQUksS0FBSyxJQUFJLEFBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3hELG9DQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ2pCLGtDQUFFLENBQUMsSUFBSSxDQUFDO0FBQ0oseUNBQUssRUFBRSxhQUFhLEdBQUcsRUFBRTtBQUN6Qix5Q0FBSyxFQUFFLFdBQVc7QUFDbEIsd0NBQUksRUFBRSxXQUFXO2lDQUNwQixDQUFDLENBQUM7NkJBQ047QUFDRCxnQ0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7eUJBQ2xCOzs7O3VCQXRCUSxjQUFjO2VBQVMsa0JBQWtCIiwiZmlsZSI6ImRhdGEvbW9kZWwvYW5uZWV2aWV3bW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==