import { Component } from '@angular/core';

@Component({
  selector: 'app-trust-strip',
  standalone: true,
  templateUrl: './trust-strip.component.html',
})
export class TrustStripComponent {
  readonly trustItems = ['Travail minutieux', 'Équipe professionnelle', 'Résultat durable'];
}
