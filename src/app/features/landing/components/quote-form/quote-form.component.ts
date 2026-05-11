import { Component } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  templateUrl: './quote-form.component.html',
})
export class QuoteFormComponent {
  readonly serviceOptions = [
    'Lavage de vitres résidentiel',
    'Lavage de vitres commercial',
    'Nettoyage de gouttières',
    'Blanchiment de gouttières',
    'Lavage à pression',
    'Plusieurs services',
  ];
}
