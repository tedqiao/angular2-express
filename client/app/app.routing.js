"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./components/dashboard/dashboard.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map