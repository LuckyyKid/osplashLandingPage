import { Injectable } from '@angular/core';

export interface NominatimAddress {
  city?: string;
  town?: string;
  village?: string;
  municipality?: string;
  borough?: string;
  suburb?: string;
  neighbourhood?: string;
  city_district?: string;
  county?: string;
  state?: string;
  postcode?: string;
  province?: string;
  region?: string;
}

export interface NominatimSearchResult {
  display_name: string;
  address?: NominatimAddress;
}

@Injectable({
  providedIn: 'root',
})
export class NominatimGeocodingService {
  async searchAddress(address: string): Promise<NominatimSearchResult | null> {
    const startTime = performance.now();
    const query = address.trim();

    if (!query) {
      return null;
    }

    const url = new URL('https://nominatim.openstreetmap.org/search');
    url.searchParams.set('format', 'jsonv2');
    url.searchParams.set('addressdetails', '1');
    url.searchParams.set('limit', '1');
    url.searchParams.set('countrycodes', 'ca');
    url.searchParams.set('accept-language', 'fr');
    url.searchParams.set('viewbox', '-73.4,47.6,-70.0,45.0');
    url.searchParams.set('bounded', '0');
    const focusedQuery = this.createQuebecFocusedQuery(query);
    url.searchParams.set('q', focusedQuery);

    console.time('[Nominatim] Recherche adresse');
    console.info('[Nominatim] Requête envoyée', { input: query, focusedQuery });

    try {
      const response = await fetch(url.toString(), {
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        console.warn('[Nominatim] Réponse non valide', { status: response.status, statusText: response.statusText });
        return null;
      }

      const results = (await response.json()) as NominatimSearchResult[];
      const result = results[0] ?? null;

      console.info('[Nominatim] Résultat reçu', {
        durationMs: Math.round(performance.now() - startTime),
        result: result?.display_name ?? null,
      });

      return result;
    } finally {
      console.timeEnd('[Nominatim] Recherche adresse');
    }
  }

  private createQuebecFocusedQuery(query: string): string {
    const normalizedQuery = query
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    if (normalizedQuery.includes('quebec') || normalizedQuery.includes('canada') || normalizedQuery.includes(' qc')) {
      return query;
    }

    return `${query}, Québec, Canada`;
  }
}
