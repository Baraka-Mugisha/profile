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

      console.log('Form submitted:', this.contactForm.value);

      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
