import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { FooterComponent } from '../../../core/components/footer/footer.component';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { ServiceDetail, getRelatedServices, getServiceBySlug } from '../data/services.data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  service?: ServiceDetail;
  relatedServices: ServiceDetail[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const service = getServiceBySlug(params.get('slug'));
      this.service = service;
      this.relatedServices = service ? getRelatedServices(service) : [];
    });
  }
}
