import { Injectable } from '@angular/core';
import { Contact } from './contacts';

import { BehaviorSubject, Observable } from 'rxjs';
import {
  collectionData,
  Firestore,
  DocumentData,
  collection,
  CollectionReference,
  setDoc,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: Contact[] = [];

  private data = new BehaviorSubject<any>(null);

  private contact: Contact | undefined;
  private contactsCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.contactsCollection = collection(this.firestore, 'contacts');
  }

  setData(data: Contact) {
    this.data.next(data);
  }

  getData() {
    return this.data.asObservable();
  }

  upsertContact(contact: Contact) {
    if (!contact.id) {
      contact.id = new Date().getTime().toString();
    }
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

  deleteContact(contact: Contact) {
    const contactsDocumentReference = doc(
      this.firestore,
      `contacts/${contact.id}`
    );
    deleteDoc(contactsDocumentReference);
    return;
  }
}
