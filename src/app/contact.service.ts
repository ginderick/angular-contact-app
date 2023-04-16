import { Injectable } from '@angular/core';
import { Contact } from './contacts';

import { Observable } from 'rxjs';
import {
  collectionData,
  Firestore,
  DocumentData,
  collection,
  CollectionReference,
  setDoc,
  doc,
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

  upsertContact(contact: Contact) {
    const contactsDocumentReference = doc(
      this.firestore,
      `contacts/${contact.id}`
    );
    return setDoc(contactsDocumentReference, { ...contact });
  }

  addContact(contact: Contact) {
    contact.id = new Date().getTime().toString();
    const contactsDocumentReference = doc(
      this.firestore,
      `contacts/${contact.id}`
    );
    return setDoc(contactsDocumentReference, { ...contact });
  }

  getContacts() {
    return collectionData(this.contactsCollection, {
      idField: 'id',
    }) as Observable<Contact[]>;
  }
}
