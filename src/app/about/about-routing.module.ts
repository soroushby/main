import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
  {
    path: 'aboutme',
    component: AboutmeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
