import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './about/contact-us/contact-us.component';
import { AddPatientsComponent } from './patients/add-patients/add-patients.component';
import { LoadPatientsComponent } from './patients/load-patients/load-patients.component';

const routes: Routes = [
  { path: 'addPateints', component: AddPatientsComponent },
  { path: 'loadPateints', component: LoadPatientsComponent },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
