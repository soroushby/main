import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { LoadPatientsComponent } from './load-patients/load-patients.component';

const routes: Routes = [
  { path: '', component: PatientsComponent },
  { path: 'addPatients', component: AddPatientsComponent },
  { path: 'loadPateints', component: LoadPatientsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
