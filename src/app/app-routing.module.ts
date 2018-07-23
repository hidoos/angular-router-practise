import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard] // 还需要做什么操作，才能保证懒加载？
  },
  {
    path: '', redirectTo: '/heroes', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
