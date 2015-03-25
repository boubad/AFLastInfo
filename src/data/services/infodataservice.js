//infodataservice.js
//
import {
    HttpClient
}
from 'aurelia-http-client';
//
import {
    PersonItem
}
from '../domain/personitem';
import {
    AttachedDoc
}
from '../domain/attacheddoc';
import {
    Departement
}
from '../domain/departement';
import {
    Annee
}
from '../domain/annee';
import {
    Semestre
}
from '../domain/semestre';
import {
    Groupe
}
from '../domain/groupe';
import {
    Unite
}
from '../domain/unite';
import {
    Matiere
}
from '../domain/matiere';
import {
    Enseignant
}
from '../domain/enseignant';
import {
    EtudPerson
}
from '../domain/etudperson';
import {
    Etudiant
}
from '../domain/etudiant';
import {
    EtudAffectation
}
from '../domain/etudaff';
import {
    ProfAffectation
}
from '../domain/profaff';
//
export class InfoDataService {
    static inject() {
        return [HttpClient];
    }
    constructor(http) {
            var self = this;
            this.http = http;
            this._baseUrl = '/api';
            this.http.configure(x => {
                x.withBaseUrl(self._baseUrl);
                x.withHeader('Content-Type', 'application/json');
            });
        } // constructor
    get baseUrl() {
        return this._baseUrl;
    }
    set baseUrl(url) {
            var self = this;
            this._baseUrl = url;
            this.http = new HttpClient();
            this.http.configure(x => {
                x.withBaseUrl(self._baseUrl);
                x.withHeader('Content-Type', 'application/json');
            });
        } // baseUrl
    form_url(prefix, params, query) {
            let sRet = '';
            if ((prefix !== undefined) && (prefix !== null)) {
                sRet = prefix;
            }
            if ((params !== undefined) && (params !== null)) {
                let n = params.length;
                for (let i = 0; i < n; ++i) {
                    sRet = sRet + '/' + encodeURIComponent(params[i]);
                } // i
            }
            if ((query !== undefined) && (query !== null)) {
                let bFirst = true;
                for (let key in query) {
                    let v = query[key];
                    if (v !== null) {
                        if (bFirst) {
                            bFirst = false;
                            sRet = sRet + '?';
                        }
                        else {
                            sRet = sRet + '&';
                        }
                        sRet = sRet + key + '=' + encodeURIComponent(v);
                    } // v
                } // key
            } // query
            return sRet;
        } // form_url
    create_item(oMap) {
            if ((oMap === undefined) || (oMap === null)) {
                return null;
            }
            let t = oMap.type;
            if ((t === undefined) || (t === null)) {
                return null;
            }
            t = t.trim().toLowerCase();
            if (t == 'person') {
                return new PersonItem(oMap);
            }
            else if (t == 'attacheddoc') {
                return new AttachedDoc(oMap);
            }
            else if (t == 'departement') {
                return new Departement(oMap);
            }
            else if (t == 'prof') {
                return new Enseignant(oMap);
            }
            else if (t == 'groupe') {
                return new Groupe(oMap);
            }
            else if (t == 'unite') {
                return new Unite(oMap);
            }
            else if (t == 'matiere') {
                return new Matiere(oMap);
            }
            else if (t == 'annee') {
                return new Annee(oMap);
            }
            else if (t == 'semestre') {
                return new Semestre(oMap);
            }
            else if (t == 'person') {
                return new PersonItem(oMap);
            }
            else if (t == 'etudperson') {
                return new EtudPerson(oMap);
            }
            else if (t == 'prof') {
                return new Enseignant(oMap);
            }
            else if (t == 'etud') {
                return new Etudiant(oMap);
            }
            else if (t == 'etudaff') {
                return new EtudAffectation(oMap);
            }
            else if (t == 'profaff') {
                return new ProfAffectation(oMap);
            }
            //
            return null;
        } // create_item
    convert_items(dd) {
            let vRet = [];
            if ((dd !== undefined) && (dd !== null) && (dd.length > 0)) {
                for (let i = 0; i < dd.length; ++i) {
                    let r = this.create_item(dd[i]);
                    if ((r !== undefined) && (r !== null)) {
                        vRet.push(r);
                    }
                } // i
            }
            return vRet;
        } // convert_items
    get_items_count(item) {
            let data = {};
            item.to_fetch_map(data);
            data.$count = 1;
            let url = this.form_url(item.collection_name, null, data);
            return this.http.get(url).then(rsp => {
                let nRet = 0;
                if (rsp.isSuccess) {
                    nRet = rsp.content.count;
                }
                return nRet;
            }, () => {
                return 0;
            });
        } // get_items_count
    get_items(item, offset, limit) {
            let data = {};
            item.to_fetch_map(data);
            if ((offset !== undefined) &&
                (offset !== null) && (offset > 0)) {
                data.$skip = offset;
            }
            if ((limit !== undefined) &&
                (limit !== null) && (limit > 0)) {
                data.$limit = limit;
            }
            let url = this.form_url(item.collection_name, null, data);
            return this.http.get(url).then((rsp) => {
                if (rsp.isSuccess) {
                    return this.convert_items(rsp.content);
                }
                else {
                    return [];
                }
            }, () => {
                return [];
            });
        } // get_items
    get_one_item(item) {
            return this.get_items(item).then(dd => {
                if (dd.length > 0) {
                    return dd[0];
                }
                else {
                    return null;
                }
            });
        } // get_one_item
    find_item_by_id(item) {
            let id = item.id;
            let model = this.create_item({
                _id: id,
                type: item.type
            });
            return this.get_one_item(model);
        } // find_item_byid
    insert_item(item) {
            let data = {};
            item.to_insert_map(data);
            let url = this.form_url(item.collection_name);
            return this.http.post(url, data).then((rsp) => {
                if (rsp.isSuccess) {
                    return rsp.content;
                }
                else {
                    throw new Error(rsp.statusText);
                }
            });
        } // insert_item
    update_item(item) {
            let data = {};
            item.to_insert_map(data);
            let url = this.form_url(item.collection_name, [item.id]);
            return this.http.put(url, data).then((rsp) => {
                if (rsp.isSuccess) {
                    return rsp.content;
                }
                else {
                    throw new Error(rsp.statusText);
                }
            });
        } // update_item
    remove_item(item) {
            let url = this.form_url(item.collection_name, [item.id]);
            return this.http.delete(url).then((rsp) => {
                if (rsp.isSuccess) {
                    return rsp.content;
                }
                else {
                    throw new Error(rsp.statusText);
                }
            });
        } // remove_item
    maintains_item(item) {
            let data = {};
            item.to_insert_map(data);
            if (item.has_id) {
                let url = this.form_url(item.collection_name, [item.id]);
                return this.http.put(url, data).then((rsp) => {
                    if (rsp.isSuccess) {
                        return rsp.content;
                    }
                    else {
                        throw new Error(rsp.statusText);
                    }
                });
            }
            else {
                let url = this.form_url(item.collection_name);
                return this.http.post(url, data).then((rsp) => {
                    if (rsp.isSuccess) {
                        return rsp.content;
                    }
                    else {
                        throw new Error(rsp.statusText);
                    }
                });
            }
        } // maintains_item
} // class InfoDataService