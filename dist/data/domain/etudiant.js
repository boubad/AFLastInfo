System.register(["./departementperson"], function (_export) {
    var DepartementPerson, _createClass, _get, _inherits, _classCallCheck, Etudiant;

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
            Etudiant = _export("Etudiant", (function (_DepartementPerson) {
                function Etudiant(oMap) {
                    _classCallCheck(this, Etudiant);

                    _get(Object.getPrototypeOf(Etudiant.prototype), "constructor", this).call(this, oMap);
                }

                _inherits(Etudiant, _DepartementPerson);

                _createClass(Etudiant, {
                    collection_name: { // constructor

                        get: function () {
                            return "etudiants";
                        }
                    },
                    type: {
                        get: function () {
                            return "etudiant";
                        }
                    }
                });

                return Etudiant;
            })(DepartementPerson));
        }
    };
});
// etudiant.js

// class Etudiant
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2V0dWRpYW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFHSSxpQkFBaUIsa0RBSVIsUUFBUTs7OztBQUpqQiw2QkFBaUIsc0JBQWpCLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUFJUixvQkFBUTtBQUNOLHlCQURGLFFBQVEsQ0FDTCxJQUFJLEVBQUU7MENBRFQsUUFBUTs7QUFFYiwrQ0FGSyxRQUFRLDZDQUVQLElBQUksRUFBRTtpQkFDZjs7MEJBSFEsUUFBUTs7NkJBQVIsUUFBUTtBQUliLG1DQUFlOzs2QkFBQSxZQUFHO0FBQ2xCLG1DQUFPLFdBQVcsQ0FBQzt5QkFDdEI7O0FBQ0csd0JBQUk7NkJBQUEsWUFBRztBQUNQLG1DQUFPLFVBQVUsQ0FBQTt5QkFDcEI7Ozs7dUJBVFEsUUFBUTtlQUFTLGlCQUFpQiIsImZpbGUiOiJkYXRhL2RvbWFpbi9ldHVkaWFudC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9