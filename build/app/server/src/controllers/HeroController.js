/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(["./../app/business/HeroBusiness"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroBusiness;
    var HeroController;
    return {
        setters:[
            function (HeroBusiness_1) {
                HeroBusiness = HeroBusiness_1;
            }],
        execute: function() {
            HeroController = (function () {
                function HeroController() {
                }
                HeroController.prototype.create = function (req, res) {
                    try {
                        var hero = req.body;
                        var heroBusiness = new HeroBusiness();
                        heroBusiness.create(hero, function (error, result) {
                            if (error)
                                res.send({ "error": "error" });
                            else
                                res.send({ "success": "success" });
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                HeroController.prototype.update = function (req, res) {
                    try {
                        var hero = req.body;
                        var _id = req.params._id;
                        var heroBusiness = new HeroBusiness();
                        heroBusiness.update(_id, hero, function (error, result) {
                            if (error)
                                res.send({ "error": "error" });
                            else
                                res.send({ "success": "success" });
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                HeroController.prototype.delete = function (req, res) {
                    try {
                        var _id = req.params._id;
                        var heroBusiness = new HeroBusiness();
                        heroBusiness.delete(_id, function (error, result) {
                            if (error)
                                res.send({ "error": "error" });
                            else
                                res.send({ "success": "success" });
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                HeroController.prototype.retrieve = function (req, res) {
                    try {
                        var heroBusiness = new HeroBusiness();
                        heroBusiness.retrieve(function (error, result) {
                            if (error)
                                res.send({ "error": "error" });
                            else
                                res.send(result);
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                HeroController.prototype.findById = function (req, res) {
                    try {
                        var _id = req.params._id;
                        var heroBusiness = new HeroBusiness();
                        heroBusiness.findById(_id, function (error, result) {
                            if (error)
                                res.send({ "error": "error" });
                            else
                                res.send(result);
                        });
                    }
                    catch (e) {
                        console.log(e);
                        res.send({ "error": "error in your request" });
                    }
                };
                return HeroController;
            }());
        }
    }
});
//# sourceMappingURL=HeroController.js.map