System.register(["aurelia-http-client", "../domain/personitem", "../domain/attacheddoc", "../domain/departement", "../domain/annee", "../domain/semestre", "../domain/groupe", "../domain/unite", "../domain/matiere", "../domain/enseignant"], function (_export) {
    var HttpClient, PersonItem, AttachedDoc, Departement, Annee, Semestre, Groupe, Unite, Matiere, Enseignant, _createClass, _classCallCheck, InfoDataService;

    return {
        setters: [function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_domainPersonitem) {
            PersonItem = _domainPersonitem.PersonItem;
        }, function (_domainAttacheddoc) {
            AttachedDoc = _domainAttacheddoc.AttachedDoc;
        }, function (_domainDepartement) {
            Departement = _domainDepartement.Departement;
        }, function (_domainAnnee) {
            Annee = _domainAnnee.Annee;
        }, function (_domainSemestre) {
            Semestre = _domainSemestre.Semestre;
        }, function (_domainGroupe) {
            Groupe = _domainGroupe.Groupe;
        }, function (_domainUnite) {
            Unite = _domainUnite.Unite;
        }, function (_domainMatiere) {
            Matiere = _domainMatiere.Matiere;
        }, function (_domainEnseignant) {
            Enseignant = _domainEnseignant.Enseignant;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            //
            InfoDataService = _export("InfoDataService", (function () {
                function InfoDataService(http) {
                    _classCallCheck(this, InfoDataService);

                    var self = this;
                    this.http = http;
                    this._baseUrl = "/api";
                    this.http.configure(function (x) {
                        x.withBaseUrl(self._baseUrl);
                        x.withHeader("Content-Type", "application/json");
                    });
                }

                _createClass(InfoDataService, {
                    baseUrl: { // constructor

                        get: function () {
                            return this._baseUrl;
                        },
                        set: function (url) {
                            this._baseUrl = url !== undefined && url !== null && url.trim().length > 0 ? url.trim() : "/api";
                            this.http.configure(function (x) {
                                x.withBaseUrl(self._baseUrl);
                                x.withHeader("Content-Type", "application/json");
                            });
                        }
                    },
                    form_url: { // baseUrl

                        value: function form_url(prefix, params, query) {
                            var sRet = "";
                            if (prefix !== undefined && prefix !== null) {
                                sRet = prefix;
                            }
                            if (params !== undefined && params !== null) {
                                var n = params.length;
                                for (var i = 0; i < n; ++i) {
                                    sRet = sRet + "/" + encodeURIComponent(params[i]);
                                } // i
                            }
                            if (query !== undefined && query !== null) {
                                var bFirst = true;
                                for (var key in query) {
                                    var v = query[key];
                                    if (v !== null) {
                                        if (bFirst) {
                                            bFirst = false;
                                            sRet = sRet + "?";
                                        } else {
                                            sRet = sRet + "&";
                                        }
                                        sRet = sRet + key + "=" + encodeURIComponent(v);
                                    } // v
                                } // key
                            } // query
                            return sRet;
                        }
                    },
                    create_item: { // form_url

                        value: function create_item(oMap) {
                            if (oMap === undefined || oMap === null) {
                                return null;
                            }
                            var t = oMap.type;
                            if (t === undefined || t === null) {
                                return null;
                            }
                            t = t.trim().toLowerCase();
                            if (t == "person") {
                                return new PersonItem(oMap);
                            } else if (t == "attacheddoc") {
                                return new AttachedDoc(oMap);
                            } else if (t == "departement") {
                                return new Departement(oMap);
                            } else if (t == "prof") {
                                return new Enseignant(oMap);
                            } else if (t == "groupe") {
                                return new Groupe(oMap);
                            } else if (t == "unite") {
                                return new Unite(oMap);
                            } else if (t == "matiere") {
                                return new Matiere(oMap);
                            } else if (t == "annee") {
                                return new Annee(oMap);
                            } else if (t == "semestre") {
                                return new Semestre(oMap);
                            }
                        }
                    },
                    convert_items: { // create_item

                        value: function convert_items(dd) {
                            var vRet = [];
                            if (dd !== undefined && dd !== null && dd.length > 0) {
                                for (var i = 0; i < dd.length; ++i) {
                                    var r = this.create_item(dd[i]);
                                    if (r !== undefined && r !== null) {
                                        vRet.push(r);
                                    }
                                } // i
                            }
                            return vRet;
                        }
                    },
                    get_items_count: { // convert_items

                        value: function get_items_count(item) {
                            var data = {};
                            item.to_fetch_map(data);
                            data.$count = 1;
                            var url = this.form_url(item.collection_name, null, data);
                            return this.http.get(url).then(function (rsp) {
                                var nRet = 0;
                                if (rsp.isSuccess) {
                                    nRet = rsp.content.count;
                                }
                                return nRet;
                            }, function () {
                                return 0;
                            });
                        }
                    },
                    get_items: { // get_items_count

                        value: function get_items(item, offset, limit) {
                            var _this = this;

                            var data = {};
                            item.to_fetch_map(data);
                            if (offset !== undefined && offset !== null && offset > 0) {
                                data.$skip = offset;
                            }
                            if (limit !== undefined && limit !== null && limit > 0) {
                                data.$limit = limit;
                            }
                            var url = this.form_url(item.collection_name, null, data);
                            return this.http.get(url).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return _this.convert_items(rsp.content);
                                } else {
                                    return [];
                                }
                            }, function () {
                                return [];
                            });
                        }
                    },
                    get_one_item: { // get_items

                        value: function get_one_item(item) {
                            return this.get_items(item).then(function (dd) {
                                if (dd.length > 0) {
                                    return dd[0];
                                } else {
                                    return null;
                                }
                            });
                        }
                    },
                    find_item_by_id: { // get_one_item

                        value: function find_item_by_id(item) {
                            var id = item.id;
                            var model = this.create_item({
                                _id: id,
                                type: item.type
                            });
                            return this.get_one_item(model);
                        }
                    },
                    insert_item: { // find_item_byid

                        value: function insert_item(item) {
                            var data = {};
                            item.to_insert_map(data);
                            var url = this.form_url(item.collection_name);
                            return this.http.post(url, data).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return rsp.content;
                                } else {
                                    throw new Error(rsp.statusText);
                                }
                            });
                        }
                    },
                    update_item: { // insert_item

                        value: function update_item(item) {
                            var data = {};
                            item.to_insert_map(data);
                            var url = this.form_url(item.collection_name, [item.id]);
                            return this.http.put(url, data).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return rsp.content;
                                } else {
                                    throw new Error(rsp.statusText);
                                }
                            });
                        }
                    },
                    remove_item: { // update_item

                        value: function remove_item(item) {
                            var url = this.form_url(item.collection_name, [item.id]);
                            return this.http["delete"](url).then(function (rsp) {
                                if (rsp.isSuccess) {
                                    return rsp.content;
                                } else {
                                    throw new Error(rsp.statusText);
                                }
                            });
                        }
                    },
                    maintains_item: { // remove_item

                        value: function maintains_item(item) {
                            var data = {};
                            item.to_insert_map(data);
                            if (item.has_id) {
                                var url = this.form_url(item.collection_name, [item.id]);
                                return this.http.put(url, data).then(function (rsp) {
                                    if (rsp.isSuccess) {
                                        return rsp.content;
                                    } else {
                                        throw new Error(rsp.statusText);
                                    }
                                });
                            } else {
                                var url = this.form_url(item.collection_name);
                                return this.http.post(url, data).then(function (rsp) {
                                    if (rsp.isSuccess) {
                                        return rsp.content;
                                    } else {
                                        throw new Error(rsp.statusText);
                                    }
                                });
                            }
                        } // maintains_item

                    }
                }, {
                    inject: {
                        value: function inject() {
                            return [HttpClient];
                        }
                    }
                });

                return InfoDataService;
            })());
        }
    };
});
//infodataservice.js
//

//
// class InfoDataService
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvc2VydmljZXMvaW5mb2RhdGFzZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFHSSxVQUFVLEVBS1YsVUFBVSxFQUlWLFdBQVcsRUFJWCxXQUFXLEVBSVgsS0FBSyxFQUlMLFFBQVEsRUFJUixNQUFNLEVBSU4sS0FBSyxFQUlMLE9BQU8sRUFJUCxVQUFVLGlDQUlELGVBQWU7Ozs7QUF6Q3hCLHNCQUFVLHNCQUFWLFVBQVU7O0FBS1Ysc0JBQVUscUJBQVYsVUFBVTs7QUFJVix1QkFBVyxzQkFBWCxXQUFXOztBQUlYLHVCQUFXLHNCQUFYLFdBQVc7O0FBSVgsaUJBQUssZ0JBQUwsS0FBSzs7QUFJTCxvQkFBUSxtQkFBUixRQUFROztBQUlSLGtCQUFNLGlCQUFOLE1BQU07O0FBSU4saUJBQUssZ0JBQUwsS0FBSzs7QUFJTCxtQkFBTyxrQkFBUCxPQUFPOztBQUlQLHNCQUFVLHFCQUFWLFVBQVU7Ozs7Ozs7Ozs7QUFJRCwyQkFBZTtBQUliLHlCQUpGLGVBQWUsQ0FJWixJQUFJLEVBQUU7MENBSlQsZUFBZTs7QUFLaEIsd0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQix3QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsd0JBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQ3ZCLHdCQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUNyQix5QkFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0IseUJBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7cUJBQ3BELENBQUMsQ0FBQztpQkFDTjs7NkJBWkksZUFBZTtBQWdCcEIsMkJBQU87OzZCQUhBLFlBQUc7QUFDVixtQ0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUN4Qjs2QkFDVSxVQUFDLEdBQUcsRUFBRTtBQUNULGdDQUFJLENBQUMsUUFBUSxHQUFHLEFBQUMsQUFBQyxHQUFHLEtBQUssU0FBUyxJQUFNLEdBQUcsS0FBSyxJQUFJLEFBQUMsSUFDakQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsR0FBSSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDO0FBQ25ELGdDQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUNyQixpQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0IsaUNBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7NkJBQ3BELENBQUMsQ0FBQzt5QkFDTjs7QUFDTCw0QkFBUTs7K0JBQUEsa0JBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDeEIsZ0NBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLGdDQUFJLEFBQUMsTUFBTSxLQUFLLFNBQVMsSUFBTSxNQUFNLEtBQUssSUFBSSxBQUFDLEVBQUU7QUFDN0Msb0NBQUksR0FBRyxNQUFNLENBQUM7NkJBQ2pCO0FBQ0QsZ0NBQUksQUFBQyxNQUFNLEtBQUssU0FBUyxJQUFNLE1BQU0sS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUM3QyxvQ0FBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUN0QixxQ0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUN4Qix3Q0FBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUNBQ3JEO0FBQUEsNkJBQ0o7QUFDRCxnQ0FBSSxBQUFDLEtBQUssS0FBSyxTQUFTLElBQU0sS0FBSyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQzNDLG9DQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbEIscUNBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLHdDQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsd0NBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtBQUNaLDRDQUFJLE1BQU0sRUFBRTtBQUNSLGtEQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ2YsZ0RBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO3lDQUNyQixNQUFNO0FBQ0gsZ0RBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO3lDQUNyQjtBQUNELDRDQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7cUNBQ25EO0FBQUEsaUNBQ0o7QUFBQSw2QkFDSjtBQUNELG1DQUFPLElBQUksQ0FBQzt5QkFDZjs7QUFDTCwrQkFBVzs7K0JBQUEscUJBQUMsSUFBSSxFQUFFO0FBQ1YsZ0NBQUksQUFBQyxJQUFJLEtBQUssU0FBUyxJQUFNLElBQUksS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUN6Qyx1Q0FBTyxJQUFJLENBQUM7NkJBQ2Y7QUFDRCxnQ0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNsQixnQ0FBSSxBQUFDLENBQUMsS0FBSyxTQUFTLElBQU0sQ0FBQyxLQUFLLElBQUksQUFBQyxFQUFFO0FBQ25DLHVDQUFPLElBQUksQ0FBQzs2QkFDZjtBQUNELDZCQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzNCLGdDQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7QUFDZix1Q0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDL0IsTUFBTSxJQUFJLENBQUMsSUFBSSxhQUFhLEVBQUU7QUFDM0IsdUNBQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ2hDLE1BQU0sSUFBSSxDQUFDLElBQUksYUFBYSxFQUFFO0FBQzNCLHVDQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUNoQyxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTtBQUNwQix1Q0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDL0IsTUFBTSxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7QUFDdEIsdUNBQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQzNCLE1BQU0sSUFBSSxDQUFDLElBQUksT0FBTyxFQUFFO0FBQ3JCLHVDQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUMxQixNQUFNLElBQUksQ0FBQyxJQUFJLFNBQVMsRUFBRTtBQUN2Qix1Q0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs2QkFDNUIsTUFBTSxJQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDckIsdUNBQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQzFCLE1BQU0sSUFBSSxDQUFDLElBQUksVUFBVSxFQUFFO0FBQ3hCLHVDQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUM3Qjt5QkFDSjs7QUFDTCxpQ0FBYTs7K0JBQUEsdUJBQUMsRUFBRSxFQUFFO0FBQ1YsZ0NBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLGdDQUFJLEFBQUMsRUFBRSxLQUFLLFNBQVMsSUFBTSxFQUFFLEtBQUssSUFBSSxBQUFDLElBQUssRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUN4RCxxQ0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDaEMsd0NBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsd0NBQUksQUFBQyxDQUFDLEtBQUssU0FBUyxJQUFNLENBQUMsS0FBSyxJQUFJLEFBQUMsRUFBRTtBQUNuQyw0Q0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQ0FDaEI7aUNBQ0o7QUFBQSw2QkFDSjtBQUNELG1DQUFPLElBQUksQ0FBQzt5QkFDZjs7QUFDTCxtQ0FBZTs7K0JBQUEseUJBQUMsSUFBSSxFQUFFO0FBQ2QsZ0NBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLGdDQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hCLGdDQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNoQixnQ0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxRCxtQ0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLEVBQUk7QUFDbEMsb0NBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNiLG9DQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUU7QUFDZix3Q0FBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lDQUM1QjtBQUNELHVDQUFPLElBQUksQ0FBQzs2QkFDZixFQUFFLFlBQU07QUFDTCx1Q0FBTyxDQUFDLENBQUM7NkJBQ1osQ0FBQyxDQUFDO3lCQUNOOztBQUNMLDZCQUFTOzsrQkFBQSxtQkFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7O0FBQ3ZCLGdDQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCxnQ0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QixnQ0FBSSxBQUFDLE1BQU0sS0FBSyxTQUFTLElBQ3BCLE1BQU0sS0FBSyxJQUFJLEFBQUMsSUFBSyxNQUFNLEdBQUcsQ0FBQyxBQUFDLEVBQUU7QUFDbkMsb0NBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDOzZCQUN2QjtBQUNELGdDQUFJLEFBQUMsS0FBSyxLQUFLLFNBQVMsSUFDbkIsS0FBSyxLQUFLLElBQUksQUFBQyxJQUFLLEtBQUssR0FBRyxDQUFDLEFBQUMsRUFBRTtBQUNqQyxvQ0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NkJBQ3ZCO0FBQ0QsZ0NBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUQsbUNBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQ3BDLG9DQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUU7QUFDZiwyQ0FBTyxNQUFLLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7aUNBQzFDLE1BQU07QUFDSCwyQ0FBTyxFQUFFLENBQUM7aUNBQ2I7NkJBQ0osRUFBRSxZQUFNO0FBQ0wsdUNBQU8sRUFBRSxDQUFDOzZCQUNiLENBQUMsQ0FBQzt5QkFDTjs7QUFDTCxnQ0FBWTs7K0JBQUEsc0JBQUMsSUFBSSxFQUFFO0FBQ1gsbUNBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLEVBQUk7QUFDbkMsb0NBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDZiwyQ0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7aUNBQ2hCLE1BQU07QUFDSCwyQ0FBTyxJQUFJLENBQUM7aUNBQ2Y7NkJBQ0osQ0FBQyxDQUFDO3lCQUNOOztBQUNMLG1DQUFlOzsrQkFBQSx5QkFBQyxJQUFJLEVBQUU7QUFDZCxnQ0FBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNqQixnQ0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUN6QixtQ0FBRyxFQUFFLEVBQUU7QUFDUCxvQ0FBSSxFQUFFLElBQUksQ0FBQyxJQUFJOzZCQUNsQixDQUFDLENBQUM7QUFDSCxtQ0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNuQzs7QUFDTCwrQkFBVzs7K0JBQUEscUJBQUMsSUFBSSxFQUFFO0FBQ1YsZ0NBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLGdDQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLGdDQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM5QyxtQ0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQzNDLG9DQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUU7QUFDZiwyQ0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO2lDQUN0QixNQUFNO0FBQ0gsMENBQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lDQUNuQzs2QkFDSixDQUFDLENBQUM7eUJBQ047O0FBQ0wsK0JBQVc7OytCQUFBLHFCQUFDLElBQUksRUFBRTtBQUNWLGdDQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCxnQ0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixnQ0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekQsbUNBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUMxQyxvQ0FBSSxHQUFHLENBQUMsU0FBUyxFQUFFO0FBQ2YsMkNBQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztpQ0FDdEIsTUFBTTtBQUNILDBDQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQ0FDbkM7NkJBQ0osQ0FBQyxDQUFDO3lCQUNOOztBQUNMLCtCQUFXOzsrQkFBQSxxQkFBQyxJQUFJLEVBQUU7QUFDVixnQ0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekQsbUNBQU8sSUFBSSxDQUFDLElBQUksVUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUN2QyxvQ0FBSSxHQUFHLENBQUMsU0FBUyxFQUFFO0FBQ2YsMkNBQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztpQ0FDdEIsTUFBTTtBQUNILDBDQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQ0FDbkM7NkJBQ0osQ0FBQyxDQUFDO3lCQUNOOztBQUNMLGtDQUFjOzsrQkFBQSx3QkFBQyxJQUFJLEVBQUU7QUFDYixnQ0FBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsZ0NBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsZ0NBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNiLG9DQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RCx1Q0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQzFDLHdDQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUU7QUFDZiwrQ0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO3FDQUN0QixNQUFNO0FBQ0gsOENBQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FDQUNuQztpQ0FDSixDQUFDLENBQUM7NkJBQ04sTUFBTTtBQUNILG9DQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM5Qyx1Q0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQzNDLHdDQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUU7QUFDZiwrQ0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO3FDQUN0QixNQUFNO0FBQ0gsOENBQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FDQUNuQztpQ0FDSixDQUFDLENBQUM7NkJBQ047eUJBQ0o7QUFBQTs7O0FBMU1FLDBCQUFNOytCQUFBLGtCQUFHO0FBQ1osbUNBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzt5QkFDdkI7Ozs7dUJBSFEsZUFBZSIsImZpbGUiOiJkYXRhL3NlcnZpY2VzL2luZm9kYXRhc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9