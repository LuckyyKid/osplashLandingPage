import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { FooterComponent } from '../../../core/components/footer/footer.component';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { SecteurServi, ServiceAreaService } from '../../../core/services/service-area.service';
import { ServiceDetail, getRelatedServices, getServiceBySlug } from '../data/services.data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly serviceAreaService = inject(ServiceAreaService);
  private readonly title = inject(Title);

  service?: ServiceDetail;
  relatedServices: ServiceDetail[] = [];
  readonly servedSectors: SecteurServi[] = this.serviceAreaService.getServedSectors();
  readonly servedRegions: string[] = Array.from(
    new Set(this.servedSectors.map((sector) => sector.region).filter((region): region is string => Boolean(region))),
  );

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const service = getServiceBySlug(params.get('slug'));
      this.service = service;
      this.relatedServices = service ? getRelatedServices(service) : [];
      this.title.setTitle(service ? `${service.title} | O'Splash` : "Service introuvable | O'Splash");
    });
  }
}
