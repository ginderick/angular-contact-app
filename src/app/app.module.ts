import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContactTableComponent } from './contact-table/contact-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ContactComponent,
    ContactFormComponent,
    ContactTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: ContactComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
