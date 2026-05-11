import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SERVICES } from '../../../services/data/services.data';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-section.component.html',
})
export class ServicesSectionComponent {
  readonly services = SERVICES.filter((service) =>
    ['lavage-de-vitres-residentiel', 'nettoyage-de-gouttieres', 'lavage-a-pression'].includes(service.slug),
  );
}
