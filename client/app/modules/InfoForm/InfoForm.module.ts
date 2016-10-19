/**
 * Created by jianqiao on 10/18/16.
 */


import {NgModule} from '@angular/core';
import {InfoFormComponent} from "./components/infoForm.component";
import {sharedModule} from "../../shared/shared.module";
import {infoFormService} from "./components/infoForm.service";


@NgModule({
    imports:[
        sharedModule
    ],
    declarations:[
        InfoFormComponent,
    ],
    providers:[
        infoFormService
    ],
    exports:[
        InfoFormComponent
    ]
})
export class InfoFormModule{

}