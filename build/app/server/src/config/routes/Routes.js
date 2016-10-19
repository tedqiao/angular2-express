System.register(['express', '../routes/emailRouters'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, emailRouter;
    var app, Routes;
    return {
        setters:[
            function (express_1) {
                express = express_1;
            },
            function (emailRouter_1) {
                emailRouter = emailRouter_1;
            }],
        execute: function() {
            // import HeroRoutes = require('../routes/HeroRoutes');
            app = express();
            Routes = (function () {
                function Routes() {
                }
                Object.defineProperty(Routes.prototype, "routes", {
                    get: function () {
                        app.use("/email", emailRouter);
                        return app;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Routes;
            }());
        }
    }
});
//# sourceMappingURL=Routes.js.map