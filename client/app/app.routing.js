"use strict";
var router_1 = require('@angular/router');
var infoForm_component_1 = require("./modules/InfoForm/components/infoForm.component");
var appRoutes = [
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
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map