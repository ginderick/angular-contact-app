import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css'],
})
export class ContactViewComponent implements OnInit {
  contact: Contact | undefined;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.contact = this.route.snapshot.data['data'];
  }

  goBack(): void {
    this.location.back();
  }
}
