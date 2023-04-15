import { Component, ViewChild } from '@angular/core';
import { Contact } from '../contacts';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contacts: Contact[] = [];

  addItem(contact: Contact) {
    this.contacts = [contact, ...this.contacts];
    console.log('Adding contact');
    console.log(this.contacts);
  }
}
