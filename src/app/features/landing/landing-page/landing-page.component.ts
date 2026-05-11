import { Component } from '@angular/core';

import { FooterComponent } from '../../../core/components/footer/footer.component';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { MaintenancePlansComponent } from '../components/maintenance-plans/maintenance-plans.component';
import { QuoteFormComponent } from '../components/quote-form/quote-form.component';
import { ReviewsCarouselComponent } from '../components/reviews-carousel/reviews-carousel.component';
import { ServicesSectionComponent } from '../components/services-section/services-section.component';
import { TrustStripComponent } from '../components/trust-strip/trust-strip.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    TrustStripComponent,
    ServicesSectionComponent,
    MaintenancePlansComponent,
    ReviewsCarouselComponent,
    QuoteFormComponent,
    FooterComponent,
  ],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {}
