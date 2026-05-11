import { Component } from '@angular/core';

import { FooterComponent } from '../../../core/components/footer/footer.component';
import { HeaderComponent } from '../../../core/components/header/header.component';

@Component({
  selector: 'app-careers-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './careers-page.component.html',
})
export class CareersPageComponent {}
