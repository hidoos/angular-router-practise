import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { HeroListComponent } from './heroes/hero-list.component';
import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  {
    path: 'crisis-center', component: CrisisListComponent
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
