import { Injectable } from '@angular/core';
import { Contact } from './contacts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: Contact[] = [];
  constructor(private http: HttpClient) {}

  addToContact(contact: Contact) {
    this.contacts.push(contact);
  }

  getContacts() {
    return this.http.get<Contact[]>('/assets/contact.json');
  }
}
