import { Injectable } from '@angular/core';
import { Contact } from './contacts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get<{ name: string; email: string; contact: string }[]>(
      '/assets/contact.json'
    );
  }
}
