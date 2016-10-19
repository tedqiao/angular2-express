System.register(['@angular/router', "./modules/InfoForm/components/infoForm.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, infoForm_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (infoForm_component_1_1) {
                infoForm_component_1 = infoForm_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    redirectTo: '/info',
                    pathMatch: 'full'
                },
                {
                    path: 'info',
                    component: infoForm_component_1.InfoFormComponent
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    }
});
//# sourceMappingURL=app.routing.js.map