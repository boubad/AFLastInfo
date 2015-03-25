System.register(["./affectation"], function (_export) {
    var Affectation, _createClass, _get, _inherits, _classCallCheck, ProfAffectation;

    return {
        setters: [function (_affectation) {
            Affectation = _affectation.Affectation;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            ProfAffectation = _export("ProfAffectation", (function (_Affectation) {
                function ProfAffectation(oMap) {
                    _classCallCheck(this, ProfAffectation);

                    _get(Object.getPrototypeOf(ProfAffectation.prototype), "constructor", this).call(this, oMap);
                }

                _inherits(ProfAffectation, _Affectation);

                _createClass(ProfAffectation, {
                    type: {
                        get: function () {
                            return "profaff";
                        }
                    },
                    collection_name: {
                        get: function () {
                            return "profaffs";
                        }
                    },
                    is_storeable: {
                        get: function () {
                            return _get(Object.getPrototypeOf(ProfAffectation.prototype), "is_storeable", this) && this.has_uniteid && this.has_matiereid && this.has_enseignantid;
                        }
                    }
                });

                return ProfAffectation;
            })(Affectation));
        }
    };
});
// profaff.js
//
// class EtudAffectation
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL3Byb2ZhZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUdJLFdBQVcsa0RBSUYsZUFBZTs7OztBQUp4Qix1QkFBVyxnQkFBWCxXQUFXOzs7Ozs7Ozs7Ozs7OztBQUlGLDJCQUFlO0FBQ2IseUJBREYsZUFBZSxDQUNaLElBQUksRUFBRTswQ0FEVCxlQUFlOztBQUVwQiwrQ0FGSyxlQUFlLDZDQUVkLElBQUksRUFBRTtpQkFDZjs7MEJBSFEsZUFBZTs7NkJBQWYsZUFBZTtBQUlwQix3QkFBSTs2QkFBQSxZQUFHO0FBQ1AsbUNBQU8sU0FBUyxDQUFDO3lCQUNwQjs7QUFDRyxtQ0FBZTs2QkFBQSxZQUFHO0FBQ2xCLG1DQUFPLFVBQVUsQ0FBQzt5QkFDckI7O0FBQ0csZ0NBQVk7NkJBQUEsWUFBRztBQUNmLG1DQUFRLDJCQVhILGVBQWUsc0NBV1UsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRTt5QkFDbEc7Ozs7dUJBWlEsZUFBZTtlQUFTLFdBQVciLCJmaWxlIjoiZGF0YS9kb21haW4vcHJvZmFmZi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9