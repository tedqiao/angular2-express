import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import {InfoFormComponent} from "./modules/InfoForm/components/infoForm.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/info',
    pathMatch: 'full'
  },
  {
    path: 'info',
    component: InfoFormComponent
  }

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
