System.register(["./departementperson"], function (_export) {
    var DepartementPerson, _createClass, _get, _inherits, _classCallCheck, Enseignant;

    return {
        setters: [function (_departementperson) {
            DepartementPerson = _departementperson.DepartementPerson;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Enseignant = _export("Enseignant", (function (_DepartementPerson) {
                function Enseignant(oMap) {
                    _classCallCheck(this, Enseignant);

                    _get(Object.getPrototypeOf(Enseignant.prototype), "constructor", this).call(this, oMap);
                }

                _inherits(Enseignant, _DepartementPerson);

                _createClass(Enseignant, {
                    type: {
                        get: function () {
                            return "prof";
                        }
                    },
                    collection_name: {
                        get: function () {
                            return "profs";
                        }
                    }
                });

                return Enseignant;
            })(DepartementPerson));
        }
    };
});
// enseignant.js
// class Enseignant
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2Vuc2VpZ25hbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUVJLGlCQUFpQixrREFJUixVQUFVOzs7O0FBSm5CLDZCQUFpQixzQkFBakIsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQUlSLHNCQUFVO0FBQ1IseUJBREYsVUFBVSxDQUNQLElBQUksRUFBRTswQ0FEVCxVQUFVOztBQUVmLCtDQUZLLFVBQVUsNkNBRVQsSUFBSSxFQUFFO2lCQUNmOzswQkFIUSxVQUFVOzs2QkFBVixVQUFVO0FBSWYsd0JBQUk7NkJBQUEsWUFBRztBQUNQLG1DQUFPLE1BQU0sQ0FBQzt5QkFDakI7O0FBQ0csbUNBQWU7NkJBQUEsWUFBRztBQUNsQixtQ0FBTyxPQUFPLENBQUM7eUJBQ2xCOzs7O3VCQVRRLFVBQVU7ZUFBUyxpQkFBaUIiLCJmaWxlIjoiZGF0YS9kb21haW4vZW5zZWlnbmFudC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9