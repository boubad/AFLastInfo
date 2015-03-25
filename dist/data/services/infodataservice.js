System.register(["aurelia-http-client", "../domain/personitem", "../domain/attacheddoc", "../domain/departement", "../domain/annee", "../domain/semestre", "../domain/groupe", "../domain/unite", "../domain/matiere", "../domain/enseignant", "../domain/etudperson", "../domain/etudiant", "../domain/etudaff", "../domain/profaff", "../domain/groupeevent", "../domain/etudevent"], function (_export) {
    var HttpClient, PersonItem, AttachedDoc, Departement, Annee, Semestre, Groupe, Unite, Matiere, Enseignant, EtudPerson, Etudiant, EtudAffectation, ProfAffectation, GroupeEvent, EtudEvent, _createClass, _classCallCheck, InfoDataService;

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
        }, function (_domainEtudperson) {
            EtudPerson = _domainEtudperson.EtudPerson;
        }, function (_domainEtudiant) {
            Etudiant = _domainEtudiant.Etudiant;
        }, function (_domainEtudaff) {
            EtudAffectation = _domainEtudaff.EtudAffectation;
        }, function (_domainProfaff) {
            ProfAffectation = _domainProfaff.ProfAffectation;
        }, function (_domainGroupeevent) {
            GroupeEvent = _domainGroupeevent.GroupeEvent;
        }, function (_domainEtudevent) {
            EtudEvent = _domainEtudevent.EtudEvent;
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
                    this._baseUrl = "http://localhost:52999/api";
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
                            var self = this;
                            this._baseUrl = url;
                            this.http = new HttpClient();
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
                            } else if (t == "person") {
                                return new PersonItem(oMap);
                            } else if (t == "etudperson") {
                                return new EtudPerson(oMap);
                            } else if (t == "prof") {
                                return new Enseignant(oMap);
                            } else if (t == "etud") {
                                return new Etudiant(oMap);
                            } else if (t == "etudaff") {
                                return new EtudAffectation(oMap);
                            } else if (t == "profaff") {
                                return new ProfAffectation(oMap);
                            } else if (t == "groupeevent") {
                                return new GroupeEvent(oMap);
                            } else if (t == "etudevent") {
                                return new EtudEvent(oMap);
                            }
                            //
                            return null;
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
                            }, function (err) {
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
                            }, function (err) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEvc2VydmljZXMvaW5mb2RhdGFzZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFHSSxVQUFVLEVBS1YsVUFBVSxFQUlWLFdBQVcsRUFJWCxXQUFXLEVBSVgsS0FBSyxFQUlMLFFBQVEsRUFJUixNQUFNLEVBSU4sS0FBSyxFQUlMLE9BQU8sRUFJUCxVQUFVLEVBSVYsVUFBVSxFQUlWLFFBQVEsRUFJUixlQUFlLEVBSWYsZUFBZSxFQUlmLFdBQVcsRUFJWCxTQUFTLGlDQUlBLGVBQWU7Ozs7QUFqRXhCLHNCQUFVLHNCQUFWLFVBQVU7O0FBS1Ysc0JBQVUscUJBQVYsVUFBVTs7QUFJVix1QkFBVyxzQkFBWCxXQUFXOztBQUlYLHVCQUFXLHNCQUFYLFdBQVc7O0FBSVgsaUJBQUssZ0JBQUwsS0FBSzs7QUFJTCxvQkFBUSxtQkFBUixRQUFROztBQUlSLGtCQUFNLGlCQUFOLE1BQU07O0FBSU4saUJBQUssZ0JBQUwsS0FBSzs7QUFJTCxtQkFBTyxrQkFBUCxPQUFPOztBQUlQLHNCQUFVLHFCQUFWLFVBQVU7O0FBSVYsc0JBQVUscUJBQVYsVUFBVTs7QUFJVixvQkFBUSxtQkFBUixRQUFROztBQUlSLDJCQUFlLGtCQUFmLGVBQWU7O0FBSWYsMkJBQWUsa0JBQWYsZUFBZTs7QUFJZix1QkFBVyxzQkFBWCxXQUFXOztBQUlYLHFCQUFTLG9CQUFULFNBQVM7Ozs7Ozs7Ozs7QUFJQSwyQkFBZTtBQUliLHlCQUpGLGVBQWUsQ0FJWixJQUFJLEVBQUU7MENBSlQsZUFBZTs7QUFLaEIsd0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQix3QkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsd0JBQUksQ0FBQyxRQUFRLEdBQUcsNEJBQTRCLENBQUM7QUFDN0Msd0JBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ3JCLHlCQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FB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Q0FBQyxDQUFDLENBQUM7QUFDekQsbUNBQU8sSUFBSSxDQUFDLElBQUksVUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUN2QyxvQ0FBSSxHQUFHLENBQUMsU0FBUyxFQUFFO0FBQ2YsMkNBQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztpQ0FDdEIsTUFBTTtBQUNILDBDQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQ0FDbkM7NkJBQ0osQ0FBQyxDQUFDO3lCQUNOOztBQUNMLGtDQUFjOzsrQkFBQSx3QkFBQyxJQUFJLEVBQUU7QUFDYixnQ0FBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsZ0NBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsZ0NBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNiLG9DQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RCx1Q0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQzFDLHdDQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUU7QUFDZiwrQ0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO3FDQUN0QixNQUFNO0FBQ0gsOENBQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FDQUNuQztpQ0FDSixDQUFDLENBQUM7NkJBQ04sTUFBTTtBQUNILG9DQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM5Qyx1Q0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQzNDLHdDQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUU7QUFDZiwrQ0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO3FDQUN0QixNQUFNO0FBQ0gsOENBQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FDQUNuQztpQ0FDSixDQUFDLENBQUM7NkJBQ047eUJBQ0o7QUFBQTs7O0FBN05FLDBCQUFNOytCQUFBLGtCQUFHO0FBQ1osbUNBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzt5QkFDdkI7Ozs7dUJBSFEsZUFBZSIsImZpbGUiOiJkYXRhL3NlcnZpY2VzL2luZm9kYXRhc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9