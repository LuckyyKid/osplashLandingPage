import { Component } from '@angular/core';

type QuoteFormPayload = {
  nom: string;
  telephone: string;
  courriel: string;
  adresse: string;
  service: string;
  moment: string;
  details: string;
  submittedAt: string;
};

@Component({
  selector: 'app-quote-form',
  standalone: true,
  templateUrl: './quote-form.component.html',
})
export class QuoteFormComponent {
  private readonly webhookUrl = 'https://hook.us1.make.com/6951tf8ejxklqm6xv7new28bocw4580c';

  isSubmitting = false;
  submitMessage = '';
  submitStatus: 'success' | 'error' | '' = '';

  readonly serviceOptions = [
    'Lavage de vitres résidentiel',
    'Lavage de vitres commercial',
    'Nettoyage de gouttières',
    'Lavage à haute et basse pression',
    'Plusieurs services',
  ];

  async submitQuote(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';
    this.submitStatus = '';

    const formData = new FormData(form);
    const payload: QuoteFormPayload = {
      nom: this.getFormValue(formData, 'nom'),
      telephone: this.getFormValue(formData, 'telephone'),
      courriel: this.getFormValue(formData, 'courriel'),
      adresse: this.getFormValue(formData, 'adresse'),
      service: this.getFormValue(formData, 'service'),
      moment: this.getFormValue(formData, 'moment'),
      details: this.getFormValue(formData, 'details'),
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook returned ${response.status}`);
      }

      form.reset();
      this.submitStatus = 'success';
      this.submitMessage = 'Votre demande de devis a bien été envoyée.';
    } catch {
      this.submitStatus = 'error';
      this.submitMessage = 'La demande n’a pas pu être envoyée. Veuillez réessayer ou nous appeler.';
    } finally {
      this.isSubmitting = false;
    }
  }

  private getFormValue(formData: FormData, key: string): string {
    return String(formData.get(key) ?? '').trim();
  }
}
