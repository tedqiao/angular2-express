/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
System.register(['../DataAccess'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataAccess;
    var mongoose, mongooseConnection, HeroSchema, schema;
    return {
        setters:[
            function (DataAccess_1) {
                DataAccess = DataAccess_1;
            }],
        execute: function() {
            mongoose = DataAccess.mongooseInstance;
            mongooseConnection = DataAccess.mongooseConnection;
            HeroSchema = (function () {
                function HeroSchema() {
                }
                Object.defineProperty(HeroSchema, "schema", {
                    get: function () {
                        var schema = mongoose.Schema({
                            name: {
                                type: String,
                                required: true
                            },
                            power: {
                                type: String,
                                required: true
                            },
                            amountPeopleSaved: {
                                type: Number,
                                required: true
                            }
                        });
                        return schema;
                    },
                    enumerable: true,
                    configurable: true
                });
                return HeroSchema;
            }());
            schema = mongooseConnection.model("Heroes", HeroSchema.schema);
            "";
        }
    }
});
//# sourceMappingURL=HeroSchema.js.map