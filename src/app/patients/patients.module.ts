import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { LoadPatientsComponent } from './load-patients/load-patients.component';
import { MaterialModule } from '../modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    PatientsComponent,
    AddPatientsComponent,
    LoadPatientsComponent,
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
})
export class PatientsModule {}
