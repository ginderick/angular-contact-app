import { Injectable } from '@angular/core';
import { Contact } from './contacts';

import { Observable } from 'rxjs';
import {
  collectionData,
  Firestore,
  DocumentData,
  collection,
  CollectionReference,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: Contact[] = [];
  private contactsCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.contactsCollection = collection(this.firestore, 'contacts');
  }

  addToContact(contact: Contact) {
    this.contacts.push(contact);
  }

  getContacts() {
    return collectionData(this.contactsCollection, {
      idField: 'id',
    }) as Observable<Contact[]>;
  }
}
