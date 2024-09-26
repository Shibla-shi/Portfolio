// src/app/components/about/about.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  profile: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }
}
