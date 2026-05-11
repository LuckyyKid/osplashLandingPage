import { Component } from '@angular/core';

interface Review {
  name: string;
  text: string;
}

@Component({
  selector: 'app-reviews-carousel',
  standalone: true,
  templateUrl: './reviews-carousel.component.html',
})
export class ReviewsCarouselComponent {
  readonly reviews: Review[] = [
    {
      name: 'Chuck Pepn',
      text: 'Un vrai service professionnel ! Nous avons été vraiment emballés par la qualité du travail de cette équipe. Ils ont redonné une seconde vie à notre fenestration.',
    },
    {
      name: 'Gilles Goulet',
      text: 'Équipe superbe ! Des gens très professionnels. Nous sommes plus que satisfaits de leur travail. Nous les recommandons sans hésitation.',
    },
    {
      name: 'Alexis Fortin Robitaille',
      text: 'Une équipe professionnelle et super sympathique. Le travail a été accompli au-delà de nos attentes.',
    },
    {
      name: 'Marie L.',
      text: "Service rapide, propre et très minutieux. Les vitres sont impeccables et l'équipe a été très respectueuse.",
    },
    {
      name: 'Nicolas T.',
      text: 'Excellente expérience du début à la fin. Communication claire, soumission rapide et résultat impeccable.',
    },
    {
      name: 'Sarah B.',
      text: "Je recommande fortement O'Splash. Le service est fiable, professionnel et le résultat parle de lui-même.",
    },
  ];
}
