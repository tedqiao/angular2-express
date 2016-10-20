import {Routes,RouterModule} from '@angular/router';
import {homeComponent} from "./home.component";

const routes: Routes = [
    {
        path:'home',
        component:homeComponent
    }
];


export const routing = RouterModule.forChild(routes);

