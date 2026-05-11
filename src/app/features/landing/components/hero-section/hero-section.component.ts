import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ServiceAreaService } from '../../../../core/services/service-area.service';

type ServiceAreaStatus = 'available' | 'unavailable' | null;

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  addressInput = '';
  serviceAreaStatus: ServiceAreaStatus = null;

  constructor(private readonly serviceAreaService: ServiceAreaService) {}

  verifyServiceArea(): void {
    this.serviceAreaStatus = this.serviceAreaService.checkAddress(this.addressInput)
      ? 'available'
      : 'unavailable';
  }
}
