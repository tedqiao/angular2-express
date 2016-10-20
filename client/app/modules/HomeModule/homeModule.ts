import {NgModule} from '@angular/core';
import {sharedModule} from "../../shared/shared.module";
import {homeComponent} from "./components/home.component";
import {routing} from "./components/home.routing";


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