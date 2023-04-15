import { Component, ViewChild } from '@angular/core';
import { Contact } from '../contacts';
import { ContactTableComponent } from '../contact-table/contact-table.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contacts: Contact[] = [
    { id: 1, name: 'Item 1', email: 'Description 1', contact: '09272792254' },
    { id: 2, name: 'Item 2', email: 'Description 2', contact: '09272792254' },
    { id: 3, name: 'Item 3', email: 'Description 3', contact: '09272792254' },
  ];

  addItem(contact: Contact) {
    this.contacts = [contact, ...this.contacts];
    console.log('Adding contact');
    console.log(this.contacts);
  }
}
