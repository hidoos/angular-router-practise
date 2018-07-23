import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { AuthGuard } from '../auth-guard.service';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes.component';

const adminRoutes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      children: [
        {path: 'crises', component: ManageCrisesComponent},
        {path: 'heroes', component: ManageHeroesComponent},
        {path: '', component: AdminDashboardComponent},
      ]
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AdminRoutingModule {
}
