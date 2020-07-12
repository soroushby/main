import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './about/contact-us/contact-us.component';
import { AddPatientsComponent } from './patients/add-patients/add-patients.component';
import { LoadPatientsComponent } from './patients/load-patients/load-patients.component';
import { PageNotfoundComponent } from './about/page-notfound/page-notfound.component';
import { AboutmeComponent } from './about/aboutme/aboutme.component';

const routes: Routes = [
  { path: '', component: ContactUsComponent },

  {
    path: 'contactus',
    component: ContactUsComponent,
  },
  {
    path: 'aboutme',
    component: AboutmeComponent,
  },
  { path: '', component: ContactUsComponent },
  {
    path: 'patients',
    loadChildren: () =>
      import('./patients/patients.module').then((m) => m.PatientsModule),
  },
  { path: '**', component: PageNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
