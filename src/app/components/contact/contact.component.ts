// components/contact/contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  formSubmitted = false;
  formError = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // In a real app, you would send the form data to your backend
      console.log('Form submitted:', this.contactForm.value);
      this.formSubmitted = true;
      this.contactForm.reset();

      // Reset form status after 5 seconds
      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);
    } else {
      this.formError = 'Please fill all fields correctly.';
    }
  }
}
