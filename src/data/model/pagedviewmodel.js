// pagedviewmodel.js
import {
    ViewModelBase
}
from './viewmodelbase';
//
export class PagedViewModel extends ViewModelBase {

    constructor(dataService, model,baseTitle) {
            super(dataService);
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
        } // constructor
     update_title(){
         let s = '';
         if ((this.baseTitle !== undefined) && (this.baseTitle !== null)){
             s = this.baseTitle.trim();
         }
         this.title = s;
    }// update_title
    get hasPageStatus() {
            return ((this.pageStatus !== undefined) &&
                (this.pageStatus !== null) &&
                (this.pageStatus.trim().length > 0));
        }
        //
    create_item() {
            return this.dataService.create_item({
                type: this.item_model.type
            });
        }
        //
    get items() {
        return ((this._items !== undefined) && (this._items !== null)) ? this._items : [];
    }
    set items(tt) {
        this._items = ((tt !== undefined) && (tt !== null)) ? tt : [];
    }
    get current() {
        return this._current_item;
    }
    set current(v) {
        this._current_item = (v !== undefined) ? v : null;
        this.clear_error();
        this.update_menu();
    }
    get hasCurrent() {
            return ((this.current !== null) && (this.current.has_id));
        }
        //

    get canAdd() {
        return (this.add_mode === false);
    }
    cancel() {
        this.current = this._old_item;
        this.add_mode = false;
    }
    get canCancel() {
            return this.add_mode;
        } // canCancel
    addNew() {
            this.add_mode = true;
            this._old_item = this.current;
            this.current = this.create_item();
        } // addNew
        //
    get canSave() {
        return (this.current !== null) && (this.current.is_storeable !== undefined) &&
            this.current.is_storeable;
    }
    get canRemove() {
            return ((this.current !== null) && (this.current.has_id));
        } // canRemove
    remove() {
        let item = this.current;
        if ((item !== undefined) && (item !== null) && item.has_id) {
            let message = 'Voulez-vous vraiment supprimer ' + item.toString() + ' ?';
            if (!this.confirm(message)) {
                return false;
            }
            let self = this;
            this.clear_error();
            this.dataService.remove_item(item).then((res) => {
                self.refreshAll();
            }, (err) => {
                self.internal_set_error(err);
            });
        } // item
    }
    save() {
            let data = this.current;
            if ((data === undefined) || (data === null)) {
                return;
            }
            if (!data.is_storeable) {
                return;
            }
            let self = this;
            this.clear_error();
            let bOld = data.has_id;
            this.dataService.maintains_item(data).then((p) => {
                if (bOld) {
                    self.refresh();
                } else {
                    self.refreshAll();
                }
            }, (err) => {
                self.internal_set_error(err);
            });
        } // save
    refresh() {
            let self = this;
            this.clear_error();
            let count = this._internal_items_page;
            if (count < 1) {
                count = 16;
            }
            let start = this._internal_current_page * count;
            if (start < 0) {
                start = 0;
            }
            let old = this.current;
            return this.dataService.get_items(this.item_model,start, count).then((pp) => {
                self.add_mode = false;
                let res = [];
                if ((pp !== undefined) && (pp !== null) && (pp.length > 0)) {
                    res = pp;
                }
                self.items = res;
                let s = null;
                let nt = self.pagesCount;
                if (nt > 1) {
                    let nx = self._internal_current_page + 1;
                    s = 'page ' + nx + ' sur ' + nt;
                }
                self.pageStatus = s;
                let pSel = null;
                if (self.items.length > 0) {
                    if ((old === undefined) || (old === null)) {
                        pSel = self.items[0];
                    } else {
                        if ((old.id !== undefined) && (old.id !== null)) {
                            let id = old.id;
                            for (let i = 0; i < self.items.length; ++i) {
                                let x = self.items[i];
                                if ((x !== undefined) && (x !== null) && (x.id !== undefined) &&
                                    (x.id == id)) {
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
            }).catch( (err) => {
                self.internal_set_error(err);
                return false;
            });
        } // refresh
    get currentPage() {
        return (this._internal_current_page !== undefined) ?
            this._internal_current_page : 0;
    }
    set currentPage(n) {
            if ((n !== undefined) && (n !== null) && (n >= 0) &&
                (n != this._internal_current_page)) {
                if (n < this.pagesCount) {
                    this._internal_current_page = n;
                    this.refresh();
                }
            }
        } // currentPage
    get itemsPerPage() {
        return ((this._internal_items_page !== undefined) &&
            (this._internal_items_page !== null) &&
            (this._internal_items_page > 0)) ? this._internal_items_page : 16;
    }
    set itemsPerPage(n) {
        if ((n !== undefined) && (n !== null) && (n > 0) &&
            (n != this.itemsPerPage)) {
            this._internal_items_page = n;
            this._internal_pages_setup();
        }
    }
    refreshAll() {
            let self = this;
            this.clear_error();
            return this.dataService.get_items_count(this.item_model).then((n) => {
                var nn = ((n !== undefined) && (n !== null) && (n > 0)) ? n : 0;
                self.itemsCount = nn;
                return self._internal_pages_setup();
            }, (err) => {
                self.internal_set_error(err);
                return false;
            });
        } // refreshAll
    _internal_pages_setup() {
            let nt = this.itemsCount;
            let total = ((nt !== undefined) && (nt !== null) && (nt > 0)) ? nt : 0;
            let nc = this._internal_items_page;
            if (nc < 1) {
                nc = 16;
            }
            let np = Math.floor(total / nc);
            if (total > 0) {
                if ((total % nc) !== 0) {
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
        } // _iternal_pages_setup
    get hasItems() {
        return (this.itemsCount > 0);
    }
    get hasPages() {
        return (this.pagesCount > 1);
    }
    get canPrevPage() {
            return (this.currentPage > 0);
        } // canPrevPage
    get canNextPage() {
            let n = this.currentPage;
            let nm = this.pagesCount - 1;
            return (n < nm);
        } // canNextPage
    firstPage() {
            this.currentPage = 0;
        } // firstPage
    prevPage() {
            let n = this.currentPage;
            this.currentPage = n - 1;
        } // firstPage
    nextPage() {
            let n = this.currentPage;
            let nm = this.pagesCount - 1;
            if (n < nm) {
                this.currentPage = n + 1;
            }
        } // nextPage
    lastPage() {
            let n = this.currentPage;
            let nm = this.pagesCount - 1;
            if (n < nm) {
                this.currentPage = nm;
            }
        } // lastPage
} // class PagedViewModel