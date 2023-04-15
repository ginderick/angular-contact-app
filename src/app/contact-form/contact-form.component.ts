import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from '../contacts';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  @Output() formSubmit = new EventEmitter<Contact>();

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: '',
      email: '',
      contact: '',
    });
  }

  onSubmit(): void {
    const newContact: Contact = {
      id: 'lcu9DvqjxYGtmMyiPVTa',
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      contact: this.contactForm.value.contact,
    };
    // const newContact = this.contactForm.value;
    this.formSubmit.emit(newContact);
    this.contactForm.reset();
  }
}
