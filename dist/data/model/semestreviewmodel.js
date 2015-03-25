System.register(["../domain/annee", "../domain/semestre", "./intervallviewmodel"], function (_export) {
    var Annee, Semestre, IntervallViewModel, _createClass, _get, _inherits, _classCallCheck, SemestreViewModel;

    return {
        setters: [function (_domainAnnee) {
            Annee = _domainAnnee.Annee;
        }, function (_domainSemestre) {
            Semestre = _domainSemestre.Semestre;
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
            SemestreViewModel = _export("SemestreViewModel", (function (_IntervallViewModel) {
                function SemestreViewModel(dataservice) {
                    _classCallCheck(this, SemestreViewModel);

                    _get(Object.getPrototypeOf(SemestreViewModel.prototype), "constructor", this).call(this, dataservice, new Semestre(), "Semestres");
                    this._annee = new Annee();
                }

                _inherits(SemestreViewModel, _IntervallViewModel);

                _createClass(SemestreViewModel, {
                    annee: { // constructor

                        get: function () {
                            return this._annee !== undefined && this._annee !== null && this._annee.has_id ? this._annee : null;
                        },
                        set: function (d) {
                            this._annee = d !== undefined && d !== null && d.has_id ? d : null;
                        }
                    },
                    anneeid: {
                        get: function () {
                            return this.annee !== null ? this.annee.id : null;
                        },
                        set: function (id) {
                            var _this = this;

                            var vid = id !== undefined && id !== null && id.toString().trim().length > 0 ? id : null;
                            this.item_model.anneeid = vid;
                            if (vid !== null) {
                                (function () {
                                    var self = _this;
                                    _this.dataService.get_one_item(new Annee({
                                        _id: vid
                                    })).then(function (d) {
                                        self.annee = d;
                                        if (d !== undefined && d !== null && d.departementid !== undefined) {
                                            self.departementid = d.departementid;
                                        }
                                    });
                                })();
                            } else {
                                this.annee = null;
                                self.update_title();
                                self.refreshAll();
                            }
                        }
                    },
                    update_menu: {
                        value: function update_menu() {
                            var mm = [];
                            mm.push({
                                refer: "#deps",
                                title: "Départements",
                                desc: "Départements"
                            });
                            this.menu = mm;
                        }
                    },
                    canSave: {
                        get: function () {
                            if (!_get(Object.getPrototypeOf(SemestreViewModel.prototype), "canSave", this)) {
                                return false;
                            }
                            var an = this.annee;
                            if (an === null) {
                                return false;
                            }
                            var d01 = Date.parse(an.startDate.toString());
                            var d02 = Date.parse(an.endDate.toString());
                            var t1 = Date.parse(this.startDate.toString());
                            var t2 = Date.parse(this.endDate.toString());
                            return t1 >= d01 && t1 <= d02 && t2 >= d01 && t2 <= d02;
                        } // canSave

                    }
                });

                return SemestreViewModel;
            })(IntervallViewModel));
        }
    };
});
// semestreviewmodel.js
// class AnneeViewModel
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvbW9kZWwvc2VtZXN0cmV2aWV3bW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUVJLEtBQUssRUFJTCxRQUFRLEVBSVIsa0JBQWtCLGtEQUlULGlCQUFpQjs7OztBQVoxQixpQkFBSyxnQkFBTCxLQUFLOztBQUlMLG9CQUFRLG1CQUFSLFFBQVE7O0FBSVIsOEJBQWtCLHVCQUFsQixrQkFBa0I7Ozs7Ozs7Ozs7Ozs7O0FBSVQsNkJBQWlCO0FBRWYseUJBRkYsaUJBQWlCLENBRWQsV0FBVyxFQUFFOzBDQUZoQixpQkFBaUI7O0FBR2xCLCtDQUhDLGlCQUFpQiw2Q0FHWixXQUFXLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUU7QUFDaEQsd0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztpQkFDN0I7OzBCQUxJLGlCQUFpQjs7NkJBQWpCLGlCQUFpQjtBQVV0Qix5QkFBSzs7NkJBSkEsWUFBRztBQUNSLG1DQUFPLEFBQUMsQUFBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBTSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQUFBQyxJQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt5QkFDaEQ7NkJBQ1EsVUFBQyxDQUFDLEVBQUU7QUFDVCxnQ0FBSSxDQUFDLE1BQU0sR0FBRyxBQUFDLEFBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBTSxDQUFDLEtBQUssSUFBSSxBQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO3lCQUM1RTs7QUFJRywyQkFBTzs2QkFIQSxZQUFHO0FBQ1YsbUNBQU8sQUFBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7eUJBQ3ZEOzZCQUNVLFVBQUMsRUFBRSxFQUFFOzs7QUFDWixnQ0FBSSxHQUFHLEdBQUcsQUFBQyxBQUFDLEVBQUUsS0FBSyxTQUFTLElBQU0sRUFBRSxLQUFLLElBQUksQUFBQyxJQUN6QyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQUFBQyxHQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDbkQsZ0NBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUM5QixnQ0FBSSxHQUFHLEtBQUssSUFBSSxFQUFFOztBQUNkLHdDQUFJLElBQUksUUFBTyxDQUFDO0FBQ2hCLDBDQUFLLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUM7QUFDcEMsMkNBQUcsRUFBRSxHQUFHO3FDQUNYLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBSztBQUNaLDRDQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNmLDRDQUFJLEFBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBTSxDQUFDLEtBQUssSUFBSSxBQUFDLElBQUssQ0FBQyxDQUFDLGFBQWEsS0FBSyxTQUFTLEFBQUMsRUFBQztBQUNyRSxnREFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO3lDQUN4QztxQ0FDSixDQUFDLENBQUM7OzZCQUNOLE1BQU07QUFDSCxvQ0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsb0NBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQixvQ0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzZCQUNyQjt5QkFDSjs7QUFDRCwrQkFBVzsrQkFBQSx1QkFBRztBQUNWLGdDQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDWiw4QkFBRSxDQUFDLElBQUksQ0FBQztBQUNKLHFDQUFLLEVBQUUsT0FBTztBQUNkLHFDQUFLLEVBQUUsY0FBYztBQUNyQixvQ0FBSSxFQUFFLGNBQWM7NkJBQ3ZCLENBQUMsQ0FBQztBQUNILGdDQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzt5QkFDbEI7O0FBQ0csMkJBQU87NkJBQUEsWUFBRTtBQUNULGdDQUFJLDRCQTlDQyxpQkFBaUIsNkJBOENKLEVBQUM7QUFDZix1Q0FBTyxLQUFLLENBQUM7NkJBQ2hCO0FBQ0QsZ0NBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDcEIsZ0NBQUksRUFBRSxLQUFLLElBQUksRUFBQztBQUNaLHVDQUFPLEtBQUssQ0FBQzs2QkFDaEI7QUFDRCxnQ0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDOUMsZ0NBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLGdDQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUMvQyxnQ0FBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDN0MsbUNBQU8sQUFBQyxFQUFFLElBQUksR0FBRyxJQUFNLEVBQUUsSUFBSSxHQUFHLEFBQUMsSUFBSyxFQUFFLElBQUksR0FBRyxBQUFDLElBQUssRUFBRSxJQUFJLEdBQUcsQUFBQyxDQUFDO3lCQUNuRTtBQUFBOzs7O3VCQTFEUSxpQkFBaUI7ZUFBUyxrQkFBa0IiLCJmaWxlIjoiZGF0YS9tb2RlbC9zZW1lc3RyZXZpZXdtb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9