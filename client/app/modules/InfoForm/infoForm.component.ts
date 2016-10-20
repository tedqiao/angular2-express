import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {infoFormService} from "./infoForm.service";

@Component({
    selector: 'Info-Form',
    moduleId: module.id,
    templateUrl: 'infoForm.component.html'
})
export class InfoFormComponent {

    private form: FormGroup;

    constructor(private fb: FormBuilder, private _infoService: infoFormService) {
        this.form = fb.group({
            name: ['', Validators.compose([Validators.required])],
            email: ['', Validators.compose([Validators.required])],
            contact: ['', Validators.compose([Validators.required])]
        });
    }

    onSubmit() {
        this._infoService.submit(this.form.value).subscribe(this.handler);
    }

    handler = (data)=> {

    };


}
