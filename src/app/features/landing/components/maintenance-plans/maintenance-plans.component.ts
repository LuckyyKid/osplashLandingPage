import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface MaintenancePlan {
  name: string;
  discount: string;
  popular?: boolean;
  points: string[];
}

@Component({
  selector: 'app-maintenance-plans',
  standalone: true,
  imports: [NgClass],
  templateUrl: './maintenance-plans.component.html',
})
export class MaintenancePlansComponent {
  readonly plans: MaintenancePlan[] = [
    {
      name: 'Bi-annuel',
      discount: '-50$ par visite',
      points: ['2 visites par année', 'Planification automatique', 'Rappels avant chaque visite'],
    },
    {
      name: 'Trimestriel',
      discount: '-100$ par visite',
      popular: true,
      points: [
        '4 visites par année',
        'Planification automatique',
        'Rappels avant chaque visite',
        "Lavage de moustiquaires inclus selon l'offre",
      ],
    },
    {
      name: 'Tri-annuel',
      discount: '-75$ par visite',
      points: ['3 visites par année', 'Planification automatique', 'Rappels avant chaque visite'],
    },
  ];
}
