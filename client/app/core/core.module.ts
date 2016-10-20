

import {NgModule} from '@angular/core';
import {InfoFormModule} from "../modules/InfoForm/InfoForm.module";
import {HomeModule} from "../modules/HomeModule/homeModule";





@NgModule({
    imports: [
        InfoFormModule,
        HomeModule
    ],
    declarations: [
    ],
    providers: [

    ],
    exports:[
        InfoFormModule,
        HomeModule
    ]
})
export class coreModule {

}