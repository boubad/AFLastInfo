// viewmodelbase.js
import {
    UIHelper
}
from './uihelper';
//
//
export class ViewModelBase {
    constructor(service) {
            this.dataService = service;
            this.title = null;
            this._error = null;
            this._info = null;
            this.menu = [];
        } // constructor
    update_menu(){
        this.menu = [];
    }
    update_title(){
    }
    confirm(message) {
        return UIHelper.confirm(message);
    }
    static alert(message) {
        UIHelper.alert(message);
    }
    static prompt(message, response) {
        return UIHelper.prompt(message, response);
    }
get hasTitle() {
        return ((this.title !== undefined) && (this.title !== null) && (this.title.trim().length > 0));
    }
    get error() {
        return (this._error !== undefined) ? this._error : null;
    }
    set error(s) {
        this._error = ((s !== undefined) &&
            (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get hasError() {
            return (this.error != null);
        }
        //
    get info() {
        return (this._info !== 'undefined') ? this._info : null;
    }
    set info(s) {
        this._info = ((s !== undefined) &&
            (s !== null) && (s.trim().length > 0)) ? s.trim() : null;
    }
    get hasInfo() {
            return (this.info !== null);
        }
        //
    ask_question(message) {
            return true;
        }
    clear_error(){
        this.error = null;
    }
        //
    internal_set_error(err) {
            if ((err !== undefined) && (err !== null)) {
                if ((err.message !== undefined) && (err.message !== null)) {
                    this.error = err.message;
                }
                else if ((err.msg !== undefined) && (err.msg !== null)) {
                    this.error = err.msg;
                }
                else if ((err.statusText !== undefined) && (err.statusText !== null)) {
                    this.error = err.statusText;
                }
                else {
                    this.error = err.toString();
                }
            }
        } // _internal_setÃƒÂ§error
} // ViewModelBase