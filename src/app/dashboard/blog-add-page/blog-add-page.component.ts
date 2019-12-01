import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-blog-add-page',
  templateUrl: './blog-add-page.component.html',
  styleUrls: ['./blog-add-page.component.css']
})
export class BlogAddPageComponent implements OnInit {

  truncate = 100;
  cont = '12312';
  content = '';
  blogForm: FormGroup;
  isSubmitting = false;
  files = [];

  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  clear() {
    console.log('clear');
  }

  getFiles($event) {
    this.files.push($event);
  }

  getTextArea($event) {
    this.content = $event.html;
  }

  submitForm() {
    this.isSubmitting = true;
    console.log('f', this.files);
    console.log('c', this.content);
    console.log('H', this.blogForm);
  }
}
