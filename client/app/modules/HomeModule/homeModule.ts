import {NgModule} from '@angular/core';
import {sharedModule} from "../../shared/shared.module";
import {homeComponent} from "./home.component";
import {routing} from "./home.routing";


@NgModule({
    imports:[
        sharedModule,
        routing
    ],
    declarations:[
        homeComponent
    ],
    exports:[
        homeComponent
    ],
    providers:[

    ]
})
export class HomeModule{

}