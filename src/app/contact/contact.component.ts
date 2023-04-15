import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../contacts';
import { ContactService } from '../contact.service';
import { of } from 'rxjs';
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
      this.contacts = [...data, ...this.contacts];
    });
  }

  addItem(contact: Contact) {
    this.contacts = [contact, ...this.contacts];
  }
}
