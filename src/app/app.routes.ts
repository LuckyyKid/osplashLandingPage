import { Routes } from '@angular/router';

import { AboutPageComponent } from './features/about/about-page/about-page.component';
import { CareersPageComponent } from './features/careers/careers-page/careers-page.component';
import { LandingPageComponent } from './features/landing/landing-page/landing-page.component';
import { ServiceDetailComponent } from './features/services/service-detail/service-detail.component';
import { ServicesPageComponent } from './features/services/services-page/services-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'careers',
    component: CareersPageComponent,
  },
  {
    path: 'services',
    component: ServicesPageComponent,
  },
  {
    path: 'services/lavage-de-vitres',
    redirectTo: 'services/lavage-de-vitres-residentiel',
    pathMatch: 'full',
  },
  {
    path: 'services/:slug',
    component: ServiceDetailComponent,
  },
];
