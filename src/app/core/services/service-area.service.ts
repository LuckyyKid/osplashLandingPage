import { Injectable } from '@angular/core';

import secteursServisData from '../../data/secteurs-servis.json';

export interface SecteurServi {
  name: string;
  normalizedName: string;
  type?: 'city' | 'region';
  region?: string;
  aliases: string[];
  postalCodes?: string[];
}

export interface ServiceAreaResult {
  isServed: boolean;
  matchedSector?: string;
  message: string;
}

export interface AddressLookupInput {
  rawAddress?: string;
  formattedAddress?: string;
  city?: string;
  postalCode?: string;
  administrativeArea?: string;
  addressParts?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ServiceAreaService {
  readonly secteursServis: SecteurServi[] = secteursServisData.secteursServis as SecteurServi[];

  checkAddress(address: string | AddressLookupInput): ServiceAreaResult {
    const searchValue = typeof address === 'string' ? address : this.createAddressSearchValue(address);
    const normalizedAddress = this.normalize(searchValue);

    if (!normalizedAddress) {
      return this.createResult(false);
    }

    const matchedSector = this.secteursServis.find((sector) =>
      this.getSearchTerms(sector).some((term) => normalizedAddress.includes(term)),
    );

    console.info('[ServiceArea] Vérification zone', {
      searchValue,
      normalizedAddress,
      matchedSector: matchedSector?.name ?? null,
    });

    return this.createResult(Boolean(matchedSector), matchedSector?.name);
  }

  getServedSectors(): SecteurServi[] {
    return this.secteursServis;
  }

  private normalize(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private getSearchTerms(sector: SecteurServi): string[] {
    return [sector.normalizedName, sector.name, ...sector.aliases, ...(sector.postalCodes ?? [])]
      .map((term) => this.normalize(term))
      .filter((term): term is string => Boolean(term));
  }

  private createAddressSearchValue(address: AddressLookupInput): string {
    return [
      address.rawAddress,
      address.formattedAddress,
      address.city,
      address.postalCode,
      address.administrativeArea,
      ...(address.addressParts ?? []),
    ].join(' ');
  }

  private createResult(isServed: boolean, matchedSector?: string): ServiceAreaResult {
    return {
      isServed,
      matchedSector,
      message: isServed
        ? 'Votre adresse tombe dans une des zones que nous servons.'
        : 'Votre adresse ne tombe pas dans une des zones que nous servons.',
    };
  }
}
