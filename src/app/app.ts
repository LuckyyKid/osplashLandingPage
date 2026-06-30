import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

import { getServiceBySlug } from './features/services/data/services.data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly siteName = "O'Splash";

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly title: Title,
    private readonly meta: Meta,
  ) {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(() => {
      this.updateSeoMetadata();
    });
  }

  private updateSeoMetadata(): void {
    let activeRoute = this.route;

    while (activeRoute.firstChild) {
      activeRoute = activeRoute.firstChild;
    }

    const slug = activeRoute.snapshot.paramMap.get('slug');
    const service = slug ? getServiceBySlug(slug) : undefined;
    const pageTitle = service ? `${service.title} | ${this.siteName}` : activeRoute.snapshot.title;
    const description =
      service?.shortDescription ??
      activeRoute.snapshot.data['description'] ??
      'Services professionnels de nettoyage extérieur par O’Splash.';

    if (pageTitle) {
      this.title.setTitle(pageTitle);
      this.meta.updateTag({ property: 'og:title', content: pageTitle });
      this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    }

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }
}
