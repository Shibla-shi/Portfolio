// src/app/components/contact/contact.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getContacts().subscribe(data => {
      this.contact = data;
    });
  }
}
