System.register(["./departementsiglename"], function (_export) {
    var DepartementSigleNameItem, _createClass, _get, _inherits, _classCallCheck, Groupe;

    return {
        setters: [function (_departementsiglename) {
            DepartementSigleNameItem = _departementsiglename.DepartementSigleNameItem;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            Groupe = _export("Groupe", (function (_DepartementSigleNameItem) {
                function Groupe(oMap) {
                    _classCallCheck(this, Groupe);

                    _get(Object.getPrototypeOf(Groupe.prototype), "constructor", this).call(this, oMap);
                }

                _inherits(Groupe, _DepartementSigleNameItem);

                _createClass(Groupe, {
                    type: {
                        get: function () {
                            return "groupe";
                        }
                    },
                    collection_name: {
                        get: function () {
                            return "groupes";
                        }
                    }
                });

                return Groupe;
            })(DepartementSigleNameItem));
        }
    };
});
// groupe.js
//
// class Groupe
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvZG9tYWluL2dyb3VwZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBR0ksd0JBQXdCLGtEQUlmLE1BQU07Ozs7QUFKZixvQ0FBd0IseUJBQXhCLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7QUFJZixrQkFBTTtBQUNKLHlCQURGLE1BQU0sQ0FDSCxJQUFJLEVBQUU7MENBRFQsTUFBTTs7QUFFWCwrQ0FGSyxNQUFNLDZDQUVMLElBQUksRUFBRTtpQkFDZjs7MEJBSFEsTUFBTTs7NkJBQU4sTUFBTTtBQUlYLHdCQUFJOzZCQUFBLFlBQUc7QUFDUCxtQ0FBTyxRQUFRLENBQUM7eUJBQ25COztBQUNHLG1DQUFlOzZCQUFBLFlBQUc7QUFDbEIsbUNBQU8sU0FBUyxDQUFDO3lCQUNwQjs7Ozt1QkFUUSxNQUFNO2VBQVMsd0JBQXdCIiwiZmlsZSI6ImRhdGEvZG9tYWluL2dyb3VwZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9