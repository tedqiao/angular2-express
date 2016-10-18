/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroModel;
    return {
        setters:[],
        execute: function() {
            HeroModel = (function () {
                function HeroModel(heroModel) {
                    this._heroModel = heroModel;
                }
                Object.defineProperty(HeroModel.prototype, "name", {
                    get: function () {
                        return this._heroModel.name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HeroModel.prototype, "power", {
                    get: function () {
                        return this._heroModel.power;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HeroModel.prototype, "amountPeopleSaved", {
                    get: function () {
                        return this._heroModel.amountPeopleSaved;
                    },
                    enumerable: true,
                    configurable: true
                });
                return HeroModel;
            }());
            Object.seal(HeroModel);
        }
    }
});
//# sourceMappingURL=HeroModel.js.map