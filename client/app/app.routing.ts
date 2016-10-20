import { Routes, RouterModule } from '@angular/router';

import {InfoFormComponent} from "./modules/InfoForm/infoForm.component";
import {homeComponent} from "./modules/HomeModule/home.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/info',
    pathMatch: 'full'
  }

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
