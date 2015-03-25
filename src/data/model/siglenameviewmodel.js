// siglenameviewmodel.js
//
import {PagedViewModel} from './pagedviewmodel';
//
export class SigleNameViewModel extends PagedViewModel {
     constructor(dataService, model,baseTitle) {
            super(dataService,model,baseTitle);
        } // constructor
    get sigle() {
    return ((this.current !== undefined) && (this.current !== null) &&
      (this.current.sigle !== undefined)) ? this.current.sigle : null;
  }
  set sigle(s) {
    if ((this.current !== undefined) && (this.current !== null)) {
      this.current.sigle = s;
    }
  }
  get name() {
    return ((this.current !== undefined) && (this.current !== null) &&
      (this.current.name !== undefined)) ? this.current.name : null;
  }
  set name(s) {
    if ((this.current !== undefined) && (this.current !== null)) {
      this.current.name = s;
    }
  }
  get description() {
    return ((this.current !== undefined) && (this.current !== null) &&
      (this.current.description !== undefined)) ? this.current.description : null;
  }
  set description(s) {
    if ((this.current !== undefined) && (this.current !== null)) {
      this.current.description = s;
    }
  }
}// class SigleNameViewModel