import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from '../contacts';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  data: Contact = {
    id: '',
    name: '',
    email: '',
    contact: '',
  };
  @Output() formSubmit = new EventEmitter<Contact>();

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.formBuilder.group({
      name: '',
      email: '',
      contact: '',
    });
  }
  ngOnInit(): void {
    console.log('On init called in contact form');

    this.contactService.getData().subscribe((data) => {
      if (data) {
        this.contactForm = this.formBuilder.group({
          name: data.name,
          email: data.email,
          contact: data.contact,
        });
      }
    });
  }

  onSubmit(): void {
    const newContact: Contact = {
      id: '',
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      contact: this.contactForm.value.contact,
    };
    // const newContact = this.contactForm.value;
    this.formSubmit.emit(newContact);
    this.contactForm.reset();
  }
}
