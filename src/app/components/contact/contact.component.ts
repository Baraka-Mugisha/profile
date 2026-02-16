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

  socialLinks: SocialLink[] = sharedSocialLinks;

  contactInfo: ContactInfo[] = [
    {
      title: 'Location',
      value: 'Kigali, Rwanda',
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

      // The Web App URL from your Apps Script deployment
      const scriptUrl =
        'https://script.google.com/macros/s/AKfycbxwCFfrJC7WZ6FptuB4kJ2q0DFgqAJ6rnc9Vr52hZ0pv_hlhWzogYwseliJUVsm07cD/exec';

      const formData = new URLSearchParams();
      formData.append('Name', this.contactForm.value.name);
      formData.append('Email', this.contactForm.value.email);
      formData.append('Phone', this.contactForm.value.phone);
      formData.append('Company', this.contactForm.value.company);
      formData.append('Message', this.contactForm.value.message);

      fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Bypasses CORS preflight check
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      })
        .then(() => {
          // NOTE: With 'no-cors', you won't get a readable response body,
          // but the data will reach your Google Sheet successfully.
          this.showSuccessMessage = true;
          this.contactForm.reset();
          this.isSubmitting = false;
          setTimeout(() => (this.showSuccessMessage = false), 5000);
        })
        .catch((error) => {
          console.error('Submission error:', error);
          this.isSubmitting = false;
        });
    }
  }
}
