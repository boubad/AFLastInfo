import {
    Router
}
from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
    static inject() {
        return [Router];
    }
    constructor(router) {
        this.router = router;
        this.router.configure(config => {
            config.title = 'Aurelia';
            config.map([
                {
                    route: ['', 'welcome'],
                    moduleId: 'welcome',
                    nav: true,
                    title: 'Welcome'
                },
                {
                    route: 'flickr',
                    moduleId: 'flickr',
                    nav: true
                },
                {
                    route: 'deps',
                    moduleId: 'departements',
                    nav: false,
                    title: 'Départements'
                },
                {
                    route: 'admin',
                    moduleId: 'admin',
                    nav: true,
                    title: 'Administration'
                },
                 {
                    route: 'groupes/:id',
                    moduleId: 'groupes',
                    nav: false
                },
                {
                    route: 'unites/:id',
                    moduleId: 'unites',
                    nav: false
                },
                {
                    route: 'annees/:id',
                    moduleId: 'annees',
                    nav: false
                },
                {
                    route: 'semestres/:id',
                    moduleId: 'semestres',
                    nav: false
                },
                {
                    route: 'matieres/:id',
                    moduleId: 'welcome',
                    nav: false
                },
                {
                    route: 'profs/:id',
                    moduleId: 'welcome',
                    nav: false
                },
                {
                    route: 'etuds/:id',
                    moduleId: 'welcome',
                    nav: false
                },
                {
                    route: 'child-router',
                    moduleId: 'child-router',
                    nav: true,
                    title: 'Child Router'
                }
      ]);
        });
    }
}