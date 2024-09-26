import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  adminForm: FormGroup;
  content: any = {
    about: '',
    contact: { email: '', phone: '' }
  };

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.adminForm = this.fb.group({
      about: [''],
      email: [''],
      phone: ['']
    });
  }

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.http.get('http://localhost:3000/content').subscribe((data: any) => {
      this.content = data;
      this.adminForm.patchValue({
        about: this.content.about.description,
        email: this.content.contact.email,
        phone: this.content.contact.phone
      });
    });
  }

  

  saveContent() {
    const updatedContent = {
      about: { description: this.adminForm.value.about },
      contact: {
        email: this.adminForm.value.email,
        phone: this.adminForm.value.phone
      }
    };

    this.http.put('http://localhost:3000/content', updatedContent).subscribe(() => {
      alert('Content updated successfully!');
    });
  }
}
