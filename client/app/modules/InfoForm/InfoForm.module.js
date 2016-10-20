/**
 * Created by jianqiao on 10/18/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var infoForm_component_1 = require("./infoForm.component");
var shared_module_1 = require("../../shared/shared.module");
var infoForm_service_1 = require("./infoForm.service");
var info_routing_1 = require("./info.routing");
var InfoFormModule = (function () {
    function InfoFormModule() {
    }
    InfoFormModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.sharedModule,
                info_routing_1.routing
            ],
            declarations: [
                infoForm_component_1.InfoFormComponent,
            ],
            providers: [
                infoForm_service_1.infoFormService
            ],
            exports: [
                infoForm_component_1.InfoFormComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], InfoFormModule);
    return InfoFormModule;
}());
exports.InfoFormModule = InfoFormModule;
//# sourceMappingURL=InfoForm.module.js.map