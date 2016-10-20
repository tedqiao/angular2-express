System.register(['@angular/core', '@angular/forms', "./infoForm.service"], function(exports_1, context_1) {
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
    var core_1, forms_1, infoForm_service_1;
    var InfoFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (infoForm_service_1_1) {
                infoForm_service_1 = infoForm_service_1_1;
            }],
        execute: function() {
            InfoFormComponent = (function () {
                function InfoFormComponent(fb, _infoService) {
                    this.fb = fb;
                    this._infoService = _infoService;
                    this.handler = function (data) {
                    };
                    this.form = fb.group({
                        name: ['', forms_1.Validators.compose([forms_1.Validators.required])],
                        email: ['', forms_1.Validators.compose([forms_1.Validators.required])],
                        contact: ['', forms_1.Validators.compose([forms_1.Validators.required])]
                    });
                }
                InfoFormComponent.prototype.onSubmit = function () {
                    this._infoService.submit(this.form.value).subscribe(this.handler);
                };
                InfoFormComponent = __decorate([
                    core_1.Component({
                        selector: 'Info-Form',
                        moduleId: module.id,
                        templateUrl: 'infoForm.component.html'
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, infoForm_service_1.infoFormService])
                ], InfoFormComponent);
                return InfoFormComponent;
            }());
            exports_1("InfoFormComponent", InfoFormComponent);
        }
    }
});
//# sourceMappingURL=infoForm.component.js.map