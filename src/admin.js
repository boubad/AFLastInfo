import {
    Router
}
from 'aurelia-router';

export class AdminRouter {
    static inject() {
        return [Router];
    }
    constructor(router) {
        this.heading = 'Administration';
        this.router = router;
        router.configure(config => {
            config.map([
                {
                    route: ['', 'welcome'],
                    moduleId: 'welcome',
                    nav: true,
                    title: 'Welcome'
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
                    moduleId: 'welcome',
                    nav: false
                },
                {
                    route: 'semestres/:id',
                    moduleId: 'welcome',
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
                    route: 'deps',
                    moduleId: 'departements',
                    nav: true,
                    title: 'Départements'
                }
      ]);
        });
    }
}