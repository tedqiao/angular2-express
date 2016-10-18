System.register(['express', '../routes/HeroRoutes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, HeroRoutes;
    var app, Routes;
    return {
        setters:[
            function (express_1) {
                express = express_1;
            },
            function (HeroRoutes_1) {
                HeroRoutes = HeroRoutes_1;
            }],
        execute: function() {
            app = express();
            Routes = (function () {
                function Routes() {
                }
                Object.defineProperty(Routes.prototype, "routes", {
                    get: function () {
                        app.use("/", new HeroRoutes().routes);
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