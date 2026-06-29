import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SERVICES } from '../../../features/services/data/services.data';
import { ServiceAreaService } from '../../services/service-area.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  private readonly serviceAreaService = inject(ServiceAreaService);

  readonly services = SERVICES.map((service) => ({
    label: service.title,
    route: `/services/${service.slug}`,
  }));

  readonly areas = this.serviceAreaService.getServedSectors().map((sector) => sector.name);
}
