import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
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
