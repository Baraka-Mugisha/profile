import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface SocialLink {
  icon: string;
  url: string;
}

interface ContactInfo {
  title: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="inner contact">
      <!-- Section Title -->
      <div class="content__block section-title">
        <p class="h2__subtitle animate-in-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="13px"
            height="13px"
            viewBox="0 0 13 13"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
              C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
              C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
            />
          </svg>
          <span>Contact</span>
        </p>
        <h2 class="h2__title animate-in-up">Let's make something awesome together!</h2>
      </div>

      <!-- Contact Form -->
      <div class="content__block grid-block block-grid-large">
        <div class="form-container">
          <!-- Reply Messages -->
          <div class="form__reply centered text-center" [class.show]="showSuccessMessage">
            <i class="ph-bold ph-smiley reply__icon"></i>
            <p class="reply__title">Done!</p>
            <span class="reply__text"
              >Thanks for your message. I'll get back as soon as possible.</span
            >
          </div>

          <!-- Contact Form -->
          <form
            class="form contact-form"
            [formGroup]="contactForm"
            (ngSubmit)="onSubmit()"
            [class.hide]="showSuccessMessage"
          >
            <div class="container-fluid p-0">
              <div class="row gx-0">
                <div class="col-12 col-md-6 form__item animate-in-up">
                  <input
                    type="text"
                    formControlName="name"
                    placeholder="Your Name*"
                    [class.error]="isFieldInvalid('name')"
                    class="form-control"
                  />
                  <div *ngIf="isFieldInvalid('name')" class="error-message">Name is required</div>
                </div>

                <div class="col-12 col-md-6 form__item animate-in-up">
                  <input
                    type="text"
                    formControlName="company"
                    placeholder="Company Name"
                    class="form-control"
                  />
                </div>

                <div class="col-12 col-md-6 form__item animate-in-up">
                  <input
                    type="email"
                    formControlName="email"
                    placeholder="Email Address*"
                    [class.error]="isFieldInvalid('email')"
                    class="form-control"
                  />
                  <div *ngIf="isFieldInvalid('email')" class="error-message">
                    <span *ngIf="contactForm.get('email')?.errors?.['required']"
                      >Email is required</span
                    >
                    <span *ngIf="contactForm.get('email')?.errors?.['email']"
                      >Please enter a valid email</span
                    >
                  </div>
                </div>

                <div class="col-12 col-md-6 form__item animate-in-up">
                  <input
                    type="tel"
                    formControlName="phone"
                    placeholder="Phone Number*"
                    [class.error]="isFieldInvalid('phone')"
                    class="form-control"
                  />
                  <div *ngIf="isFieldInvalid('phone')" class="error-message">
                    Phone number is required
                  </div>
                </div>

                <div class="col-12 form__item animate-in-up">
                  <textarea
                    formControlName="message"
                    placeholder="A Few Words*"
                    rows="5"
                    [class.error]="isFieldInvalid('message')"
                    class="form-control"
                  ></textarea>
                  <div *ngIf="isFieldInvalid('message')" class="error-message">
                    Message is required
                  </div>
                </div>

                <div class="col-12 form__item animate-in-up">
                  <button
                    class="btn btn-default btn-hover btn-hover-accent"
                    type="submit"
                    [disabled]="isSubmitting || contactForm.invalid"
                  >
                    <span class="btn-caption">
                      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                    </span>
                    <i class="ph-bold ph-paper-plane-tilt" *ngIf="!isSubmitting"></i>
                    <i class="ph-bold ph-spinner animate-rotation" *ngIf="isSubmitting"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Social Cards -->
      <div class="content__block grid-block">
        <div class="socials-cards d-flex justify-content-start flex-wrap">
          <div
            *ngFor="let social of socialLinks"
            class="socials-cards__item d-flex grid-item-s animate-card-5"
          >
            <div class="socials-cards__card">
              <i [class]="social.icon"></i>
              <a class="socials-cards__link" [href]="social.url" target="_blank"></a>
            </div>
          </div>
        </div>
      </div>

      <!-- Teaser -->
      <div class="content__block">
        <div class="teaser">
          <p class="teaser__text animate-in-up">
            Want to know more about me, tell me about your project or just to say hello?
            <a
              class="text-link-bold"
              href="mailto:hello@alexwalker.com?subject=Message%20from%20your%20site"
              >Drop me a line</a
            >
            and I'll get back as soon as possible.
          </p>
        </div>
      </div>

      <!-- Contact Data -->
      <div class="content__block">
        <div class="container-fluid p-0 contact-lines animate-in-up">
          <div class="row g-0 contact-lines__item">
            <div *ngFor="let info of contactInfo" class="col-12 col-md-4 contact-lines__data">
              <p class="contact-lines__title animate-in-up">{{ info.title }}</p>
              <p class="contact-lines__text animate-in-up">
                <a
                  *ngIf="info.link; else textOnly"
                  class="text-link-bold"
                  [href]="info.link"
                  [target]="info.link.startsWith('http') ? '_blank' : '_self'"
                >
                  {{ info.value }}
                </a>
                <ng-template #textOnly>{{ info.value }}</ng-template>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .contact {
        background: var(--base-tint);
      }

      .section-title {
        text-align: center;
        max-width: 80rem;
        margin: 0 auto 8rem;
      }

      .form-container {
        max-width: 80rem;
        margin: 0 auto;
        position: relative;
      }

      .form__reply {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--base);
        border: 0.1rem solid var(--stroke-elements);
        border-radius: var(--_radius-l);
        padding: 4rem 3rem;
        z-index: 10;
        opacity: 0;
        visibility: hidden;
        transition: all var(--_animspeed-medium) ease;
        width: 90%;
        max-width: 50rem;
      }

      .form__reply.show {
        opacity: 1;
        visibility: visible;
      }

      .reply__icon {
        font-size: 6rem;
        color: var(--accent);
        margin-bottom: 2rem;
      }

      .reply__title {
        font-size: 2.4rem;
        font-weight: 600;
        color: var(--t-bright);
        margin-bottom: 1rem;
      }

      .reply__text {
        font-size: 1.6rem;
        color: var(--t-medium);
      }

      .contact-form {
        background: var(--base);
        border: 0.1rem solid var(--stroke-elements);
        border-radius: var(--_radius-l);
        padding: 4rem 3rem;
        transition: opacity var(--_animspeed-medium) ease;
      }

      .contact-form.hide {
        opacity: 0.3;
        pointer-events: none;
      }

      .form__item {
        margin-bottom: 2.4rem;
      }

      .form-control {
        width: 100%;
        padding: 1.8rem 2.4rem;
        font-family: var(--_font-default);
        font-size: 1.5rem;
        color: var(--t-bright);
        background: var(--base-tint);
        border: 0.1rem solid var(--stroke-elements);
        border-radius: var(--_radius-s);
        transition: all var(--_animspeed-medium) ease;
        resize: none;
      }

      .form-control:focus {
        outline: none;
        border-color: var(--accent);
        background: var(--base);
      }

      .form-control::placeholder {
        color: var(--t-placeholder);
      }

      .form-control.error {
        border-color: #e74c3c;
        background: rgba(231, 76, 60, 0.1);
      }

      .error-message {
        font-size: 1.3rem;
        color: #e74c3c;
        margin-top: 0.8rem;
      }

      .form__item:last-child {
        margin-bottom: 0;
      }

      .form__item button {
        margin: 0;
      }

      .form__item button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }

      .socials-cards {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 6rem;
      }

      .socials-cards__item {
        flex: 0 0 auto;
      }

      .socials-cards__card {
        position: relative;
        width: 6rem;
        height: 6rem;
        background: var(--base);
        border: 0.1rem solid var(--stroke-elements);
        border-radius: var(--_radius-m);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.4rem;
        color: var(--t-bright);
        transition: all var(--_animspeed-medium) ease;
        cursor: pointer;
      }

      .socials-cards__card:hover {
        transform: translateY(-0.5rem);
        border-color: var(--accent);
        background: var(--accent);
        color: var(--base-tint);
      }

      .socials-cards__link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }

      .teaser {
        text-align: center;
        max-width: 60rem;
        margin: 0 auto 6rem;
      }

      .teaser__text {
        font-size: 1.8rem;
        line-height: 1.6;
        color: var(--t-medium);
        margin: 0;
      }

      .contact-lines {
        padding: 3rem 0;
        border-top: 0.1rem solid var(--stroke-elements);
      }

      .contact-lines__item {
        gap: 2rem;
      }

      .contact-lines__data {
        text-align: center;
        padding: 2rem 1rem;
      }

      .contact-lines__title {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--t-muted);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 1rem;
      }

      .contact-lines__text {
        font-size: 1.6rem;
        margin: 0;
      }

      .contact-lines__text a {
        color: var(--t-bright);
        font-weight: 600;
      }

      /* Responsive adjustments */
      @media (max-width: 767px) {
        .contact-form {
          padding: 3rem 2rem;
        }

        .form__reply {
          padding: 3rem 2rem;
          width: 95%;
        }

        .reply__icon {
          font-size: 4rem;
        }

        .reply__title {
          font-size: 2rem;
        }

        .socials-cards {
          gap: 1.5rem;
        }

        .socials-cards__card {
          width: 5rem;
          height: 5rem;
          font-size: 2rem;
        }

        .contact-lines__data {
          margin-bottom: 2rem;
          padding: 1rem;
        }

        .contact-lines__data:last-child {
          margin-bottom: 0;
        }
      }

      /* Loading spinner animation */
      .animate-rotation {
        animation: rotate 1s linear infinite;
      }
    `,
  ],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  socialLinks: SocialLink[] = [
    { icon: 'ph-bold ph-dribbble-logo', url: 'https://dribbble.com/' },
    { icon: 'ph-bold ph-behance-logo', url: 'https://www.behance.net/' },
    { icon: 'ph-bold ph-instagram-logo', url: 'https://www.instagram.com/' },
    { icon: 'ph-bold ph-twitch-logo', url: 'https://www.twitch.tv/' },
    { icon: 'ph-bold ph-pinterest-logo', url: 'https://www.pinterest.com/' },
  ];

  contactInfo: ContactInfo[] = [
    {
      title: 'Location',
      value: 'Odesa, Ukraine',
      link: 'https://maps.app.goo.gl/xMJXTEUeHkv6kYRQ6',
    },
    {
      title: 'Phone',
      value: '+1 212-708-9400',
      link: 'tel:+12127089400',
    },
    {
      title: 'Email',
      value: 'hello@alexwalker.com',
      link: 'mailto:hello@alexwalker.com?subject=Message%20from%20your%20site',
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

  ngOnInit(): void {
    // Component initialization
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      // Simulate form submission
      console.log('Form submitted:', this.contactForm.value);

      // Simulate API delay
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;

        // Reset form after successful submission
        this.contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
