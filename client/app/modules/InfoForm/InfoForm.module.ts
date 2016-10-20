/**
 * Created by jianqiao on 10/18/16.
 */


import {NgModule} from '@angular/core';
import {InfoFormComponent} from "./components/infoForm.component";
import {sharedModule} from "../../shared/shared.module";
import {infoFormService} from "./components/infoForm.service";
import {routing} from "./components/info.routing";


@NgModule({
    imports:[
        sharedModule,
        routing
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