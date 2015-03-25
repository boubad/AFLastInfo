System.register(["aurelia-router", "bootstrap"], function (_export) {
    var Router, bootstrap, _createClass, _classCallCheck, App;

    return {
        setters: [function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_bootstrap) {
            bootstrap = _bootstrap["default"];
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            App = _export("App", (function () {
                function App(router) {
                    _classCallCheck(this, App);

                    this.router = router;
                    this.router.configure(function (config) {
                        config.title = "Aurelia";
                        config.map([{
                            route: ["", "welcome"],
                            moduleId: "welcome",
                            nav: true,
                            title: "Welcome"
                        }, {
                            route: "flickr",
                            moduleId: "flickr",
                            nav: true
                        }, {
                            route: "deps",
                            moduleId: "departements",
                            nav: false,
                            title: "Départements"
                        }, {
                            route: "admin",
                            moduleId: "admin",
                            nav: true,
                            title: "Administration"
                        }, {
                            route: "groupes/:id",
                            moduleId: "groupes",
                            nav: false
                        }, {
                            route: "unites/:id",
                            moduleId: "unites",
                            nav: false
                        }, {
                            route: "annees/:id",
                            moduleId: "welcome",
                            nav: false
                        }, {
                            route: "semestres/:id",
                            moduleId: "welcome",
                            nav: false
                        }, {
                            route: "matieres/:id",
                            moduleId: "welcome",
                            nav: false
                        }, {
                            route: "profs/:id",
                            moduleId: "welcome",
                            nav: false
                        }, {
                            route: "etuds/:id",
                            moduleId: "welcome",
                            nav: false
                        }, {
                            route: "child-router",
                            moduleId: "child-router",
                            nav: true,
                            title: "Child Router"
                        }]);
                    });
                }

                _createClass(App, null, {
                    inject: {
                        value: function inject() {
                            return [Router];
                        }
                    }
                });

                return App;
            })());
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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