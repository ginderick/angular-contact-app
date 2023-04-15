import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactService } from '../contact.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css'],
})
export class ContactTableComponent implements OnInit {
  contacts!: Observable<{ name: string; email: string; contact: string }[]>;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'email', 'contact', 'actions'];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    console.log(this.contacts);
    this.contacts.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  doSomething() {
    console.log('Hello');
  }
}
