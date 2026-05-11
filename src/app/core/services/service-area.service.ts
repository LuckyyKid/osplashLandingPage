import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceAreaService {
  private readonly serviceAreas = [
    'montréal',
    'laval',
    'longueuil',
    'brossard',
    'terrebonne',
    'repentigny',
    'blainville',
    'saint-jérôme',
    'mirabel',
    'boisbriand',
    'rosemère',
    'sainte-thérèse',
  ];

  checkAddress(address: string): boolean {
    const normalizedAddress = this.normalize(address);

    if (!normalizedAddress) {
      return false;
    }

    // Future Google Places/Geocoding validation can be added here.
    return this.serviceAreas
      .map((area) => this.normalize(area))
      .some((area) => normalizedAddress.includes(area));
  }

  private normalize(value: string): string {
    return value
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}
