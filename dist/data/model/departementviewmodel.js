System.register(["../domain/departement", "./siglenameviewmodel"], function (_export) {
    var Departement, SigleNameViewModel, _createClass, _get, _inherits, _classCallCheck, DepartementViewModel;

    return {
        setters: [function (_domainDepartement) {
            Departement = _domainDepartement.Departement;
        }, function (_siglenameviewmodel) {
            SigleNameViewModel = _siglenameviewmodel.SigleNameViewModel;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            DepartementViewModel = _export("DepartementViewModel", (function (_SigleNameViewModel) {
                function DepartementViewModel(dataservice) {
                    _classCallCheck(this, DepartementViewModel);

                    _get(Object.getPrototypeOf(DepartementViewModel.prototype), "constructor", this).call(this, dataservice, new Departement(), "Départements");
                }

                _inherits(DepartementViewModel, _SigleNameViewModel);

                _createClass(DepartementViewModel, {
                    update_menu: { // constructor

                        value: function update_menu() {
                            var mm = [];
                            var item = this.current;
                            if (item !== undefined && item !== null && item.has_id) {
                                var id = item.id;
                                mm.push({
                                    refer: "#groupes/" + id,
                                    title: "Groupes",
                                    desc: "Groupes"
                                });
                                mm.push({
                                    refer: "#unites/" + id,
                                    title: "Unités",
                                    desc: "Unités enseignement"
                                });
                                mm.push({
                                    refer: "#annees/" + id,
                                    title: "Années",
                                    desc: "Années universitaires"
                                });
                                mm.push({
                                    refer: "#profs/" + id,
                                    title: "Enseignants",
                                    desc: "Enseignants"
                                });
                                mm.push({
                                    refer: "#etuds/" + id,
                                    title: "Etudiants",
                                    desc: "Etudiants"
                                });
                            } // item
                            this.menu = mm;
                        }
                    }
                });

                return DepartementViewModel;
            })(SigleNameViewModel));
        }
    };
});
// departementviewmodel.js
//
// class DepartementViewModel
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvbW9kZWwvZGVwYXJ0ZW1lbnR2aWV3bW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUdJLFdBQVcsRUFJWCxrQkFBa0Isa0RBSVQsb0JBQW9COzs7O0FBUjdCLHVCQUFXLHNCQUFYLFdBQVc7O0FBSVgsOEJBQWtCLHVCQUFsQixrQkFBa0I7Ozs7Ozs7Ozs7Ozs7O0FBSVQsZ0NBQW9CO0FBRWxCLHlCQUZGLG9CQUFvQixDQUVqQixXQUFXLEVBQUU7MENBRmhCLG9CQUFvQjs7QUFHckIsK0NBSEMsb0JBQW9CLDZDQUdmLFdBQVcsRUFBRSxJQUFJLFdBQVcsRUFBRSxFQUFFLGNBQWMsRUFBRTtpQkFDekQ7OzBCQUpJLG9CQUFvQjs7NkJBQXBCLG9CQUFvQjtBQUs3QiwrQkFBVzs7K0JBQUEsdUJBQUc7QUFDVixnQ0FBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ1osZ0NBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsZ0NBQUksQUFBQyxJQUFJLEtBQUssU0FBUyxJQUFNLElBQUksS0FBSyxJQUFJLEFBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3hELG9DQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ2pCLGtDQUFFLENBQUMsSUFBSSxDQUFDO0FBQ0oseUNBQUssRUFBRSxXQUFXLEdBQUcsRUFBRTtBQUN2Qix5Q0FBSyxFQUFFLFNBQVM7QUFDaEIsd0NBQUksRUFBRSxTQUFTO2lDQUNsQixDQUFDLENBQUM7QUFDSCxrQ0FBRSxDQUFDLElBQUksQ0FBQztBQUNKLHlDQUFLLEVBQUUsVUFBVSxHQUFHLEVBQUU7QUFDdEIseUNBQUssRUFBRSxRQUFRO0FBQ2Ysd0NBQUksRUFBRSxxQkFBcUI7aUNBQzlCLENBQUMsQ0FBQztBQUNILGtDQUFFLENBQUMsSUFBSSxDQUFDO0FBQ0oseUNBQUssRUFBRSxVQUFVLEdBQUcsRUFBRTtBQUN0Qix5Q0FBSyxFQUFFLFFBQVE7QUFDZix3Q0FBSSxFQUFFLHVCQUF1QjtpQ0FDaEMsQ0FBQyxDQUFDO0FBQ0gsa0NBQUUsQ0FBQyxJQUFJLENBQUM7QUFDSix5Q0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFO0FBQ3JCLHlDQUFLLEVBQUUsYUFBYTtBQUNwQix3Q0FBSSxFQUFFLGFBQWE7aUNBQ3RCLENBQUMsQ0FBQztBQUNILGtDQUFFLENBQUMsSUFBSSxDQUFDO0FBQ0oseUNBQUssRUFBRSxTQUFTLEdBQUcsRUFBRTtBQUNyQix5Q0FBSyxFQUFFLFdBQVc7QUFDbEIsd0NBQUksRUFBRSxXQUFXO2lDQUNwQixDQUFDLENBQUM7NkJBQ047QUFDRCxnQ0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7eUJBQ2xCOzs7O3VCQXJDUSxvQkFBb0I7ZUFBUyxrQkFBa0IiLCJmaWxlIjoiZGF0YS9tb2RlbC9kZXBhcnRlbWVudHZpZXdtb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9