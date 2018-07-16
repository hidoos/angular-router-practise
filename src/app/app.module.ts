import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroModule } from './heroes/hero.module';
import { CrisisModule } from './crisis-center/crisis.module';
import { ComposeMessageComponent } from './compose-message.component';
import { AdminModule } from './admin/admin.module';
import { DialogService } from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroModule,
    CrisisModule,
    AdminModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    DialogService
  ]
})
export class AppModule {
}
