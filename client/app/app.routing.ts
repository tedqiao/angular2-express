import { Routes, RouterModule } from '@angular/router';

import {InfoFormComponent} from "./modules/InfoForm/components/infoForm.component";
import {homeComponent} from "./modules/HomeModule/components/home.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/info',
    pathMatch: 'full'
  }

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
