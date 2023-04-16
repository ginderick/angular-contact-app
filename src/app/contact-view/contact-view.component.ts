import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css'],
})
export class ContactViewComponent implements OnInit {
  contact: Contact | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams);
  }
}
