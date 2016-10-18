System.register(['@angular/router', './components/dashboard/dashboard.component', './components/heroes/heroes.component', './components/heroDetail/hero-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1, heroes_component_1, hero_detail_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: 'detail/:id',
                    component: hero_detail_component_1.HeroDetailComponent
                },
                {
                    path: 'heroes',
                    component: heroes_component_1.HeroesComponent
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    }
});
//# sourceMappingURL=app.routing.js.map