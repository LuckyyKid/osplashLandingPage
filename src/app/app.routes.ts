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
    title: "O'Splash | Lavage de vitres, gouttières et pression",
  },
  {
    path: 'about',
    component: AboutPageComponent,
    title: "À propos | O'Splash",
  },
  {
    path: 'careers',
    component: CareersPageComponent,
    title: "Carrières | O'Splash",
  },
  {
    path: 'services',
    component: ServicesPageComponent,
    title: "Services de nettoyage extérieur | O'Splash",
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
