import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContactService } from '../contact.service';
import { Contact } from '../contacts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css'],
})
export class ContactTableComponent implements OnChanges {
  // contacts!: Observable<Contact[]>;
  @Input() contacts: Contact[] = [];

  dataSource = new MatTableDataSource<Contact>();

  displayedColumns: string[] = ['id', 'name', 'email', 'contact', 'actions'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('ng OnChanges');
    console.log(changes['contacts']);
    if (changes['contacts'] && changes['contacts'].currentValue) {
      console.log('If statement');
      console.log(this.contacts);
      // this.dataSource.data = [
      //   ...this.dataSource.data,
      //   ...changes.contacts.currentValue,
      // ];
      this.dataSource.data = changes['contacts'].currentValue;
    }
  }

  // ngOnInit() {
  //   this.contacts = this.contactService.getContacts();
  //   this.contacts.subscribe((data) => {
  //     this.dataSource.data = data;
  //   });
  // }

  doSomething() {
    console.log('Hello');
  }
}
