System.register(['@angular/router', "./infoForm.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, infoForm_component_1;
    var routes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (infoForm_component_1_1) {
                infoForm_component_1 = infoForm_component_1_1;
            }],
        execute: function() {
            routes = [
                {
                    path: 'info',
                    component: infoForm_component_1.InfoFormComponent
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    }
});
//# sourceMappingURL=info.routing.js.map