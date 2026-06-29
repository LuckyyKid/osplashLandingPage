import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NominatimGeocodingService } from '../../../../core/services/nominatim-geocoding.service';
import { ServiceAreaResult, ServiceAreaService } from '../../../../core/services/service-area.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  addressInput = '';
  serviceAreaResult: ServiceAreaResult | null = null;
  isCheckingAddress = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly nominatimGeocodingService: NominatimGeocodingService,
    private readonly serviceAreaService: ServiceAreaService,
  ) {}

  async verifyServiceArea(): Promise<void> {
    if (this.isCheckingAddress) {
      console.info('[Hero] Verification ignoree: une requete est deja en cours.');
      return;
    }

    const verificationStartTime = performance.now();
    console.time('[Hero] Verification complete adresse');
    this.isCheckingAddress = true;
    this.serviceAreaResult = null;
    console.info('[Hero] Debut verification - isCheckingAddress:', this.isCheckingAddress);
    this.changeDetectorRef.detectChanges();

    try {
      const addressResult = await this.nominatimGeocodingService.searchAddress(this.addressInput);
      const afterNominatimTime = performance.now();
      const address = addressResult?.address;
      const relevantDisplayNameParts = this.getRelevantDisplayNameParts(addressResult?.display_name);

      this.serviceAreaResult = this.serviceAreaService.checkAddress({
        rawAddress: this.addressInput,
        city: address?.city ?? address?.town ?? address?.village ?? address?.municipality ?? address?.county,
        postalCode: address?.postcode,
        administrativeArea: address?.county,
        addressParts: address
          ? [
              address.city,
              address.town,
              address.village,
              address.municipality,
              address.borough,
              address.suburb,
              address.neighbourhood,
              address.city_district,
              address.county,
              address.postcode,
              ...relevantDisplayNameParts,
            ].filter((part): part is string => Boolean(part))
          : relevantDisplayNameParts,
      });
      console.info('[Hero] Resultat recu:', this.serviceAreaResult);
      console.info('[Hero] Timings verification', {
        nominatimMs: Math.round(afterNominatimTime - verificationStartTime),
        matchingAndStateMs: Math.round(performance.now() - afterNominatimTime),
        result: this.serviceAreaResult,
      });
    } catch (error) {
      console.error('[Hero] Erreur verification adresse', error);
      const fallbackStartTime = performance.now();
      this.serviceAreaResult = this.serviceAreaService.checkAddress(this.addressInput);
      console.info('[Hero] Resultat fallback recu:', this.serviceAreaResult);
      console.info('[Hero] Timings verification fallback', {
        fallbackMatchingMs: Math.round(performance.now() - fallbackStartTime),
        result: this.serviceAreaResult,
      });
    } finally {
      this.isCheckingAddress = false;
      console.info('[Hero] Fin verification - isCheckingAddress:', this.isCheckingAddress);
      this.changeDetectorRef.detectChanges();
      console.info('[Hero] Etat affichage pret', {
        totalMs: Math.round(performance.now() - verificationStartTime),
      });
      console.timeEnd('[Hero] Verification complete adresse');
    }
  }

  private getRelevantDisplayNameParts(displayName?: string): string[] {
    if (!displayName) {
      return [];
    }

    const parts = displayName
      .split(',')
      .map((part) => part.trim())
      .slice(2)
      .filter((part) => Boolean(part) && !this.isPostalCode(part) && part.toLowerCase() !== 'canada');

    if (this.normalizeDisplayNamePart(parts.at(-1) ?? '') === 'quebec') {
      parts.pop();
    }

    return parts;
  }

  private isPostalCode(value: string): boolean {
    return /^[a-z]\d[a-z]\s?\d[a-z]\d$/i.test(value.trim());
  }

  private normalizeDisplayNamePart(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }
}
