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
    title: "Lavage à pression à Montréal | O'Splash",
    data: {
      description: 'Lavage à pression professionnel à Montréal. Terrasses, pavés, entrées, revêtements extérieurs et plus.',
    },
  },
  {
    path: 'about',
    component: AboutPageComponent,
    title: "À propos | O'Splash",
    data: {
      description: "Découvrez O'Splash, une entreprise locale spécialisée en lavage de vitres, gouttières et surfaces extérieures.",
    },
  },
  {
    path: 'careers',
    component: CareersPageComponent,
    title: "Carrières | O'Splash",
    data: {
      description: "Joignez l'équipe O'Splash pour offrir des services professionnels de nettoyage extérieur aux clients résidentiels et commerciaux.",
    },
  },
  {
    path: 'services',
    component: ServicesPageComponent,
    title: "Services de nettoyage extérieur | O'Splash",
    data: {
      description: "Explorez les services O'Splash : lavage de vitres, nettoyage de gouttières et lavage à pression pour propriétés résidentielles et commerciales.",
    },
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
