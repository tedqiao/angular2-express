import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {routing}       from './app.routing';
import {sharedModule} from "./shared/shared.module";
import {coreModule} from "./core/core.module";


@NgModule({
    imports: [
        BrowserModule,
        sharedModule,
        coreModule,
        routing
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
