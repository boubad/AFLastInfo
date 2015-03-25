System.register(["../domain/departement", "./siglenameviewmodel"], function (_export) {
    var Departement, SigleNameViewModel, _createClass, _get, _inherits, _classCallCheck, DepartementSigleNameViewModel;

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
            DepartementSigleNameViewModel = _export("DepartementSigleNameViewModel", (function (_SigleNameViewModel) {
                function DepartementSigleNameViewModel(dataService, model, baseTitle) {
                    _classCallCheck(this, DepartementSigleNameViewModel);

                    _get(Object.getPrototypeOf(DepartementSigleNameViewModel.prototype), "constructor", this).call(this, dataService, model, baseTitle);
                    this._dep = new Departement();
                }

                _inherits(DepartementSigleNameViewModel, _SigleNameViewModel);

                _createClass(DepartementSigleNameViewModel, {
                    departement: { // constructor

                        get: function () {
                            return this._dep !== undefined && this._dep !== null && this._dep.has_id ? this._dep : null;
                        },
                        set: function (d) {
                            this._dep = d !== undefined && d !== null && d.has_id ? d : null;
                        }
                    },
                    departementid: {
                        get: function () {
                            return this.departement !== null ? this.departement.id : null;
                        },
                        set: function (id) {
                            var _this = this;

                            var vid = id !== undefined && id !== null && id.toString().trim().length > 0 ? id : null;
                            this.item_model.departementid = vid;
                            if (vid !== null) {
                                (function () {
                                    var self = _this;
                                    _this.dataService.get_one_item(new Departement({
                                        _id: vid
                                    })).then(function (d) {
                                        self.departement = d;
                                        self.update_title();
                                        self.refreshAll();
                                    });
                                })();
                            } else {
                                this.departement = null;
                                self.update_title();
                                self.refreshAll();
                            }
                        }
                    },
                    update_title: {
                        value: function update_title() {
                            var s = "";
                            if (this.baseTitle !== undefined && this.baseTitle !== null) {
                                s = this.baseTitle.trim();
                            }
                            var d = this.departement;
                            if (d !== null) {
                                s = s + " : " + d.name;
                            }
                            this.title = s;
                        }
                    },
                    create_item: { // update_title

                        //

                        value: function create_item() {
                            return this.dataService.create_item({
                                type: this.item_model.type,
                                departementid: this.departementid
                            });
                        }
                    }
                });

                return DepartementSigleNameViewModel;
            })(SigleNameViewModel));
        }
    };
});
//depsiglenameviewmodel.js
//
// class DepartementSigleNameViewModel
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvbW9kZWwvZGVwc2lnbGVuYW1ldmlld21vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFHSSxXQUFXLEVBSVgsa0JBQWtCLGtEQUlULDZCQUE2Qjs7OztBQVJ0Qyx1QkFBVyxzQkFBWCxXQUFXOztBQUlYLDhCQUFrQix1QkFBbEIsa0JBQWtCOzs7Ozs7Ozs7Ozs7OztBQUlULHlDQUE2QjtBQUMzQix5QkFERiw2QkFBNkIsQ0FDMUIsV0FBVyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7MENBRGxDLDZCQUE2Qjs7QUFFOUIsK0NBRkMsNkJBQTZCLDZDQUV4QixXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtBQUNyQyx3QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO2lCQUNqQzs7MEJBSkksNkJBQTZCOzs2QkFBN0IsNkJBQTZCO0FBU2xDLCtCQUFXOzs2QkFKQSxZQUFHO0FBQ2QsbUNBQU8sQUFBQyxBQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxBQUFDLElBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO3lCQUM1Qzs2QkFDYyxVQUFDLENBQUMsRUFBRTtBQUNmLGdDQUFJLENBQUMsSUFBSSxHQUFHLEFBQUMsQUFBQyxDQUFDLEtBQUssU0FBUyxJQUFNLENBQUMsS0FBSyxJQUFJLEFBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7eUJBQzFFOztBQUlHLGlDQUFhOzZCQUhBLFlBQUc7QUFDaEIsbUNBQU8sQUFBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksR0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7eUJBQ25FOzZCQUNnQixVQUFDLEVBQUUsRUFBRTs7O0FBQ2xCLGdDQUFJLEdBQUcsR0FBRyxBQUFDLEFBQUMsRUFBRSxLQUFLLFNBQVMsSUFBTSxFQUFFLEtBQUssSUFBSSxBQUFDLElBQ3pDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEdBQUksRUFBRSxHQUFHLElBQUksQ0FBQztBQUNuRCxnQ0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBQ3BDLGdDQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7O0FBQ2Qsd0NBQUksSUFBSSxRQUFPLENBQUM7QUFDaEIsMENBQUssV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLFdBQVcsQ0FBQztBQUMxQywyQ0FBRyxFQUFFLEdBQUc7cUNBQ1gsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFLO0FBQ1osNENBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLDRDQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDcEIsNENBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztxQ0FDckIsQ0FBQyxDQUFDOzs2QkFDTixNQUFNO0FBQ0gsb0NBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLG9DQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDcEIsb0NBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs2QkFDckI7eUJBQ0o7O0FBQ0QsZ0NBQVk7K0JBQUEsd0JBQUc7QUFDUCxnQ0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ1gsZ0NBQUksQUFBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsSUFBTSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQzdELGlDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs2QkFDN0I7QUFDRCxnQ0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUN6QixnQ0FBSSxDQUFDLEtBQUssSUFBSSxFQUFFO0FBQ1osaUNBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7NkJBQzFCO0FBQ0QsZ0NBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3lCQUNsQjs7QUFHTCwrQkFBVzs7OzsrQkFBQSx1QkFBRztBQUNWLG1DQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO0FBQ2hDLG9DQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJO0FBQzFCLDZDQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7NkJBQ3BDLENBQUMsQ0FBQzt5QkFDTjs7Ozt1QkFwRFEsNkJBQTZCO2VBQVMsa0JBQWtCIiwiZmlsZSI6ImRhdGEvbW9kZWwvZGVwc2lnbGVuYW1ldmlld21vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=