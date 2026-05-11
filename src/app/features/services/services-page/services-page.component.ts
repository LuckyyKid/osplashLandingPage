import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FooterComponent } from '../../../core/components/footer/footer.component';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { SERVICES } from '../data/services.data';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './services-page.component.html',
})
export class ServicesPageComponent {
  readonly services = SERVICES;
}
