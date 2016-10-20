import {Routes,RouterModule} from '@angular/router';
import {InfoFormComponent} from "./infoForm.component";

const routes: Routes = [
    {
        path:'info',
        component:InfoFormComponent
    }
];


export const routing = RouterModule.forChild(routes);

