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
  @Input() contacts: Contact[] = [];

  dataSource = new MatTableDataSource<Contact>();

  displayedColumns: string[] = ['id', 'name', 'email', 'contact', 'actions'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['contacts'] && changes['contacts'].currentValue) {
      this.dataSource.data = changes['contacts'].currentValue;
    }
  }

  doSomething() {
    console.log('Hello');
  }

  populateContactData(item: Contact) {
    console.log('Clicked row:', item);
  }
}
