"use strict";
var router_1 = require('@angular/router');
var appRoutes = [
    {
        path: '',
        redirectTo: '/info',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map