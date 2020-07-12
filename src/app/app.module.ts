import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './about/contact-us/contact-us.component';
import { AddPatientsComponent } from './patients/add-patients/add-patients.component';
import { LoadPatientsComponent } from './patients/load-patients/load-patients.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { PageNotfoundComponent } from './about/page-notfound/page-notfound.component';
import { AboutmeComponent } from './about/aboutme/aboutme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    PageNotfoundComponent,
    AboutmeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
