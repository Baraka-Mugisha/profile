import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialLink } from '../../types';
import { socialLinks as sharedSocialLinks } from '../../data/personal';

interface ContactInfo {
  title: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styles: [],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  submitError = false;
  private successTimer?: ReturnType<typeof setTimeout>;

  dismissSuccess(): void {
    clearTimeout(this.successTimer);
    this.showSuccessMessage = false;
  }

  socialLinks: SocialLink[] = sharedSocialLinks;

  contactInfo: ContactInfo[] = [
    {
      title: 'Location',
      value: 'Kigali, Rw',
      link: 'https://maps.app.goo.gl/Kigali',
    },
    {
      title: 'Phone',
      value: '+250 785 459 575',
      link: 'tel:+250785459575',
    },
    {
      title: 'Email',
      value: 'mugishaje@gmail.com',
      link: 'mailto:mugishaje@gmail.com?subject=Message%20from%20your%20site',
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitError = false;

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.contactForm.value),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Contact request failed: ${response.status}`);
          }
          this.showSuccessMessage = true;
          this.contactForm.reset();
          this.isSubmitting = false;
          clearTimeout(this.successTimer);
          this.successTimer = setTimeout(() => this.dismissSuccess(), 4000);
        })
        .catch((error) => {
          console.error('Submission error:', error);
          this.submitError = true;
          this.isSubmitting = false;
        });
    }
  }
}
