System.register(['@angular/core', "../modules/InfoForm/InfoForm.module"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, InfoForm_module_1;
    var coreModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (InfoForm_module_1_1) {
                InfoForm_module_1 = InfoForm_module_1_1;
            }],
        execute: function() {
            coreModule = (function () {
                function coreModule() {
                }
                coreModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            InfoForm_module_1.InfoFormModule
                        ],
                        declarations: [],
                        providers: [],
                        exports: [
                            InfoForm_module_1.InfoFormModule
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], coreModule);
                return coreModule;
            }());
            exports_1("coreModule", coreModule);
        }
    }
});
//# sourceMappingURL=core.module.js.map