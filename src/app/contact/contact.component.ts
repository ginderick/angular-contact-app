import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  upsertContact(contact: Contact) {
    this.contactService.upsertContact(contact);
    this.contacts.push(contact);
  }

  addContact(contact: Contact) {
    this.contactService.upsertContact(contact);
    this.contacts.push(contact);
  }
}
