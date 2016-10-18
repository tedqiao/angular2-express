/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["express", "./../../controllers/HeroController"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, HeroController;
    var router, HeroRoutes;
    return {
        setters:[
            function (express_1) {
                express = express_1;
            },
            function (HeroController_1) {
                HeroController = HeroController_1;
            }],
        execute: function() {
            router = express.Router();
            HeroRoutes = (function () {
                function HeroRoutes() {
                    this._heroController = new HeroController();
                }
                Object.defineProperty(HeroRoutes.prototype, "routes", {
                    get: function () {
                        var controller = this._heroController;
                        router.get("/heroes", controller.retrieve);
                        router.post("/heroes", controller.create);
                        router.put("/heroes/:_id", controller.update);
                        router.get("/heroes/:_id", controller.findById);
                        router.delete("/heroes/:_id", controller.delete);
                        return router;
                    },
                    enumerable: true,
                    configurable: true
                });
                return HeroRoutes;
            }());
            Object.seal(HeroRoutes);
        }
    }
});
//# sourceMappingURL=HeroRoutes.js.map