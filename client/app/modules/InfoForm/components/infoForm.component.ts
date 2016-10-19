
import {Component,OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';
import {infoFormService} from "./infoForm.service";

@Component({
    selector:'Info-Form',
    // template:`<h1>test</h1>`
     templateUrl:'./app/modules/infoForm/components/infoForm.component.html'
})
export class InfoFormComponent{

    private form:FormGroup;

    constructor(private fb:FormBuilder,private _infoService:infoFormService){
        this.form = fb.group({
            name:['',Validators.compose([Validators.required])],
            email:['',Validators.compose([Validators.required])],
            contact:['',Validators.compose([Validators.required])]
        });
    }

    onSubmit(){
        this._infoService.submit(this.form.value).subscribe((data)=>console.log(data));
    }



}
