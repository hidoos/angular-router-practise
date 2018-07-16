import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { ManageCrisesComponent } from './manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes.component';

const adminRoutes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children: [{
    path: '',
    component: AdminDashboardComponent
  }, {
    path: 'crises',
    component: ManageCrisesComponent
  }, {
    path: 'heroes',
    component: ManageHeroesComponent
  }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
