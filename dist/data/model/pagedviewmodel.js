System.register(["./viewmodelbase"], function (_export) {
    var ViewModelBase, _createClass, _get, _inherits, _classCallCheck, PagedViewModel;

    return {
        setters: [function (_viewmodelbase) {
            ViewModelBase = _viewmodelbase.ViewModelBase;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            PagedViewModel = _export("PagedViewModel", (function (_ViewModelBase) {
                function PagedViewModel(dataService, model, baseTitle) {
                    _classCallCheck(this, PagedViewModel);

                    _get(Object.getPrototypeOf(PagedViewModel.prototype), "constructor", this).call(this, dataService);
                    this.item_model = model;
                    this.baseTitle = baseTitle;
                    this.add_mode = false;
                    this._internal_items_page = 16;
                    this.itemsCount = 0;
                    this.pagesCount = 0;
                    this._internal_current_page = 0;
                    this._items = [];
                    this.pageStatus = null;
                    this._current_item = this.dataService.create_item({
                        type: this.item_model.type
                    });
                    this._old_item = null;
                }

                _inherits(PagedViewModel, _ViewModelBase);

                _createClass(PagedViewModel, {
                    update_title: { // constructor

                        value: function update_title() {
                            var s = "";
                            if (this.baseTitle !== undefined && this.baseTitle !== null) {
                                s = this.baseTitle.trim();
                            }
                            this.title = s;
                        }
                    },
                    hasPageStatus: { // update_title

                        get: function () {
                            return this.pageStatus !== undefined && this.pageStatus !== null && this.pageStatus.trim().length > 0;
                        }
                    },
                    create_item: {
                        //

                        value: function create_item() {
                            return this.dataService.create_item({
                                type: this.item_model.type
                            });
                        }
                    },
                    items: {
                        //

                        get: function () {
                            return this._items !== undefined && this._items !== null ? this._items : [];
                        },
                        set: function (tt) {
                            this._items = tt !== undefined && tt !== null ? tt : [];
                        }
                    },
                    current: {
                        get: function () {
                            return this._current_item;
                        },
                        set: function (v) {
                            this._current_item = v !== undefined ? v : null;
                            this.clear_error();
                            this.update_menu();
                        }
                    },
                    hasCurrent: {
                        get: function () {
                            return this.current !== null && this.current.has_id;
                        }
                    },
                    canAdd: {
                        //

                        get: function () {
                            return this.add_mode === false;
                        }
                    },
                    cancel: {
                        value: function cancel() {
                            this.current = this._old_item;
                            this.add_mode = false;
                        }
                    },
                    canCancel: {
                        get: function () {
                            return this.add_mode;
                        }
                    },
                    addNew: { // canCancel

                        value: function addNew() {
                            this.add_mode = true;
                            this._old_item = this.current;
                            this.current = this.create_item();
                        }
                    },
                    canSave: { // addNew
                        //

                        get: function () {
                            return this.current !== null && this.current.is_storeable !== undefined && this.current.is_storeable;
                        }
                    },
                    canRemove: {
                        get: function () {
                            return this.current !== null && this.current.has_id;
                        }
                    },
                    remove: { // canRemove

                        value: function remove() {
                            var _this = this;

                            var item = this.current;
                            if (item !== undefined && item !== null && item.has_id) {
                                var _ret = (function () {
                                    var message = "Voulez-vous vraiment supprimer " + item.toString() + " ?";
                                    if (!_this.confirm(message)) {
                                        return {
                                            v: false
                                        };
                                    }
                                    var self = _this;
                                    _this.clear_error();
                                    _this.dataService.remove_item(item).then(function (res) {
                                        self.refreshAll();
                                    }, function (err) {
                                        self.internal_set_error(err);
                                    });
                                })();

                                if (typeof _ret === "object") {
                                    return _ret.v;
                                }
                            } // item
                        }
                    },
                    save: {
                        value: function save() {
                            var data = this.current;
                            if (data === undefined || data === null) {
                                return;
                            }
                            if (!data.is_storeable) {
                                return;
                            }
                            var self = this;
                            this.clear_error();
                            var bOld = data.has_id;
                            this.dataService.maintains_item(data).then(function (p) {
                                if (bOld) {
                                    self.refresh();
                                } else {
                                    self.refreshAll();
                                }
                            }, function (err) {
                                self.internal_set_error(err);
                            });
                        }
                    },
                    refresh: { // save

                        value: function refresh() {
                            var self = this;
                            this.clear_error();
                            var count = this._internal_items_page;
                            if (count < 1) {
                                count = 16;
                            }
                            var start = this._internal_current_page * count;
                            if (start < 0) {
                                start = 0;
                            }
                            var old = this.current;
                            return this.dataService.get_items(this.item_model, start, count).then(function (pp) {
                                self.add_mode = false;
                                var res = [];
                                if (pp !== undefined && pp !== null && pp.length > 0) {
                                    res = pp;
                                }
                                self.items = res;
                                var s = null;
                                var nt = self.pagesCount;
                                if (nt > 1) {
                                    var nx = self._internal_current_page + 1;
                                    s = "page " + nx + " sur " + nt;
                                }
                                self.pageStatus = s;
                                var pSel = null;
                                if (self.items.length > 0) {
                                    if (old === undefined || old === null) {
                                        pSel = self.items[0];
                                    } else {
                                        if (old.id !== undefined && old.id !== null) {
                                            var id = old.id;
                                            for (var i = 0; i < self.items.length; ++i) {
                                                var x = self.items[i];
                                                if (x !== undefined && x !== null && x.id !== undefined && x.id == id) {
                                                    pSel = x;
                                                    break;
                                                }
                                            } // i
                                            if (pSel === null) {
                                                pSel = self.items[0];
                                            }
                                        } else {
                                            pSel = self.items[0];
                                        }
                                    }
                                }
                                self.current = pSel;
                                if (self.items.length < 1) {
                                    self.addNew();
                                }
                                return true;
                            })["catch"](function (err) {
                                self.internal_set_error(err);
                                return false;
                            });
                        }
                    },
                    currentPage: { // refresh

                        get: function () {
                            return this._internal_current_page !== undefined ? this._internal_current_page : 0;
                        },
                        set: function (n) {
                            if (n !== undefined && n !== null && n >= 0 && n != this._internal_current_page) {
                                if (n < this.pagesCount) {
                                    this._internal_current_page = n;
                                    this.refresh();
                                }
                            }
                        }
                    },
                    itemsPerPage: { // currentPage

                        get: function () {
                            return this._internal_items_page !== undefined && this._internal_items_page !== null && this._internal_items_page > 0 ? this._internal_items_page : 16;
                        },
                        set: function (n) {
                            if (n !== undefined && n !== null && n > 0 && n != this.itemsPerPage) {
                                this._internal_items_page = n;
                                this._internal_pages_setup();
                            }
                        }
                    },
                    refreshAll: {
                        value: function refreshAll() {
                            var self = this;
                            this.clear_error();
                            return this.dataService.get_items_count(this.item_model).then(function (n) {
                                var nn = n !== undefined && n !== null && n > 0 ? n : 0;
                                self.itemsCount = nn;
                                return self._internal_pages_setup();
                            }, function (err) {
                                self.internal_set_error(err);
                                return false;
                            });
                        }
                    },
                    _internal_pages_setup: { // refreshAll

                        value: function _internal_pages_setup() {
                            var nt = this.itemsCount;
                            var total = nt !== undefined && nt !== null && nt > 0 ? nt : 0;
                            var nc = this._internal_items_page;
                            if (nc < 1) {
                                nc = 16;
                            }
                            var np = Math.floor(total / nc);
                            if (total > 0) {
                                if (total % nc !== 0) {
                                    ++np;
                                }
                            }
                            this._internal_current_page = 0;
                            this.pagesCount = np;
                            if (this.pagesCount > 0) {
                                return this.refresh();
                            } else {
                                this.items = [];
                                this.addNew();
                                return true;
                            }
                        }
                    },
                    hasItems: { // _iternal_pages_setup

                        get: function () {
                            return this.itemsCount > 0;
                        }
                    },
                    hasPages: {
                        get: function () {
                            return this.pagesCount > 1;
                        }
                    },
                    canPrevPage: {
                        get: function () {
                            return this.currentPage > 0;
                        }
                    },
                    canNextPage: { // canPrevPage

                        get: function () {
                            var n = this.currentPage;
                            var nm = this.pagesCount - 1;
                            return n < nm;
                        }
                    },
                    firstPage: { // canNextPage

                        value: function firstPage() {
                            this.currentPage = 0;
                        }
                    },
                    prevPage: { // firstPage

                        value: function prevPage() {
                            var n = this.currentPage;
                            this.currentPage = n - 1;
                        }
                    },
                    nextPage: { // firstPage

                        value: function nextPage() {
                            var n = this.currentPage;
                            var nm = this.pagesCount - 1;
                            if (n < nm) {
                                this.currentPage = n + 1;
                            }
                        }
                    },
                    lastPage: { // nextPage

                        value: function lastPage() {
                            var n = this.currentPage;
                            var nm = this.pagesCount - 1;
                            if (n < nm) {
                                this.currentPage = nm;
                            }
                        } // lastPage

                    }
                });

                return PagedViewModel;
            })(ViewModelBase));
        }
    };
});
// pagedviewmodel.js
// class PagedViewModel
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvbW9kZWwvcGFnZWR2aWV3bW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUVJLGFBQWEsa0RBSUosY0FBYzs7OztBQUp2Qix5QkFBYSxrQkFBYixhQUFhOzs7Ozs7Ozs7Ozs7OztBQUlKLDBCQUFjO0FBRVoseUJBRkYsY0FBYyxDQUVYLFdBQVcsRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFOzBDQUZqQyxjQUFjOztBQUdmLCtDQUhDLGNBQWMsNkNBR1QsV0FBVyxFQUFFO0FBQ25CLHdCQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN4Qix3QkFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0Isd0JBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLHdCQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO0FBQy9CLHdCQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNwQix3QkFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDcEIsd0JBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7QUFDaEMsd0JBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLHdCQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2Qix3QkFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztBQUM5Qyw0QkFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTtxQkFDN0IsQ0FBQyxDQUFDO0FBQ0gsd0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUN6Qjs7MEJBakJJLGNBQWM7OzZCQUFkLGNBQWM7QUFrQnRCLGdDQUFZOzsrQkFBQSx3QkFBRTtBQUNWLGdDQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDWCxnQ0FBSSxBQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFNLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxBQUFD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