/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../repository/HeroRepository"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroRepository;
    var HeroBusiness;
    return {
        setters:[
            function (HeroRepository_1) {
                HeroRepository = HeroRepository_1;
            }],
        execute: function() {
            HeroBusiness = (function () {
                function HeroBusiness() {
                    this._heroRepository = new HeroRepository();
                }
                HeroBusiness.prototype.create = function (item, callback) {
                    this._heroRepository.create(item, callback);
                };
                HeroBusiness.prototype.retrieve = function (callback) {
                    this._heroRepository.retrieve(callback);
                };
                HeroBusiness.prototype.update = function (_id, item, callback) {
                    var _this = this;
                    this._heroRepository.findById(_id, function (err, res) {
                        if (err)
                            callback(err, res);
                        else
                            _this._heroRepository.update(res._id, item, callback);
                    });
                };
                HeroBusiness.prototype.delete = function (_id, callback) {
                    this._heroRepository.delete(_id, callback);
                };
                HeroBusiness.prototype.findById = function (_id, callback) {
                    this._heroRepository.findById(_id, callback);
                };
                return HeroBusiness;
            }());
            Object.seal(HeroBusiness);
        }
    }
});
//# sourceMappingURL=HeroBusiness.js.map