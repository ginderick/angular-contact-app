import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactForm = this.formBuilder.group({
    name: '',
    email: '',
    contact: '',
  });
  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    console.log('Form submitted');
  }
}
