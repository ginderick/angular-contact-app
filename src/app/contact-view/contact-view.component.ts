import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css'],
})
export class ContactViewComponent implements OnInit {
  contact: Contact | undefined;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.contact = this.route.snapshot.data['data'];
  }
}
