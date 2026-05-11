import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly services = [
    { label: 'Lavage de vitres résidentiel', route: '/services/lavage-de-vitres-residentiel' },
    { label: 'Lavage de vitres commercial', route: '/services/lavage-de-vitres-commercial' },
    { label: 'Nettoyage de gouttières', route: '/services/nettoyage-de-gouttieres' },
    { label: 'Lavage à pression', route: '/services/lavage-a-pression' },
  ];

  readonly areas = ['Montréal', 'Laval', 'Longueuil', 'Brossard', 'Terrebonne', 'Saint-Jérôme'];
}
