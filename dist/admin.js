System.register(["aurelia-router"], function (_export) {
    var Router, _createClass, _classCallCheck, AdminRouter;

    return {
        setters: [function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            AdminRouter = _export("AdminRouter", (function () {
                function AdminRouter(router) {
                    _classCallCheck(this, AdminRouter);

                    this.heading = "Administration";
                    this.router = router;
                    router.configure(function (config) {
                        config.map([{
                            route: ["", "welcome"],
                            moduleId: "welcome",
                            nav: true,
                            title: "Welcome"
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
                            route: "deps",
                            moduleId: "departements",
                            nav: true,
                            title: "Départements"
                        }]);
                    });
                }

                _createClass(AdminRouter, null, {
                    inject: {
                        value: function inject() {
                            return [Router];
                        }
                    }
                });

                return AdminRouter;
            })());
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFDSSxNQUFNLGlDQUlHLFdBQVc7Ozs7QUFKcEIsa0JBQU0sa0JBQU4sTUFBTTs7Ozs7Ozs7O0FBSUcsdUJBQVc7QUFJVCx5QkFKRixXQUFXLENBSVIsTUFBTSxFQUFFOzBDQUpYLFdBQVc7O0FBS2hCLHdCQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDO0FBQ2hDLHdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQiwwQkFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUN2Qiw4QkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNQO0FBQ0ksaUNBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUM7QUFDdEIsb0NBQVEsRUFBRSxTQUFTO0FBQ25CLCtCQUFHLEVBQUUsSUFBSTtBQUNULGlDQUFLLEVBQUUsU0FBUzt5QkFDbkIsRUFDRDtBQUNJLGlDQUFLLEVBQUUsYUFBYTtBQUNwQixvQ0FBUSxFQUFFLFNBQVM7QUFDbkIsK0JBQUcsRUFBRSxLQUFLO3lCQUNiLEVBQ0Q7QUFDSSxpQ0FBSyxFQUFFLFlBQVk7QUFDbkIsb0NBQVEsRUFBRSxRQUFRO0FBQ2xCLCtCQUFHLEVBQUUsS0FBSzt5QkFDYixFQUNEO0FBQ0ksaUNBQUssRUFBRSxZQUFZO0FBQ25CLG9DQUFRLEVBQUUsU0FBUztBQUNuQiwrQkFBRyxFQUFFLEtBQUs7eUJBQ2IsRUFDRDtBQUNJLGlDQUFLLEVBQUUsZUFBZTtBQUN0QixvQ0FBUSxFQUFFLFNBQVM7QUFDbkIsK0JBQUcsRUFBRSxLQUFLO3lCQUNiLEVBQ0Q7QUFDSSxpQ0FBSyxFQUFFLGNBQWM7QUFDckIsb0NBQVEsRUFBRSxTQUFTO0FBQ25CLCtCQUFHLEVBQUUsS0FBSzt5QkFDYixFQUNEO0FBQ0ksaUNBQUssRUFBRSxXQUFXO0FBQ2xCLG9DQUFRLEVBQUUsU0FBUztBQUNuQiwrQkFBRyxFQUFFLEtBQUs7eUJBQ2IsRUFDRDtBQUNJLGlDQUFLLEVBQUUsV0FBVztBQUNsQixvQ0FBUSxFQUFFLFNBQVM7QUFDbkIsK0JBQUcsRUFBRSxLQUFLO3lCQUNiLEVBQ0Q7QUFDSSxpQ0FBSyxFQUFFLE1BQU07QUFDYixvQ0FBUSxFQUFFLGNBQWM7QUFDeEIsK0JBQUcsRUFBRSxJQUFJO0FBQ1QsaUNBQUssRUFBRSxjQUFjO3lCQUN4QixDQUNWLENBQUMsQ0FBQztxQkFDQSxDQUFDLENBQUM7aUJBQ047OzZCQTFEUSxXQUFXO0FBQ2IsMEJBQU07K0JBQUEsa0JBQUc7QUFDWixtQ0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUNuQjs7Ozt1QkFIUSxXQUFXIiwiZmlsZSI6ImFkbWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=