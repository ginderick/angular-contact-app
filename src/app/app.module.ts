import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, ContactEditorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{ path: '', component: ContactEditorComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
