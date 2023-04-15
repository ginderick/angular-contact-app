import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactService } from '../contact.service';
import { Contact } from '../contacts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css'],
})
export class ContactTableComponent implements OnInit {
  contacts!: Observable<Contact[]>;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'email', 'contact', 'actions'];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.contacts.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  doSomething() {
    console.log('Hello');
  }
}
