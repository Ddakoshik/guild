import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { Blog } from '../../shared/models/blog.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

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
  user: any;
  id: number;

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private router: Router) {

    afs.firestore.settings({});
    this.blogForm = this.fb.group({
      title: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    // TODO: getUser
    this.user = { uid: 'mNJTSg1wQGcSvCBLIB7E5LXhZ8H3', email: 'sergeyver@nitka.com', iuser: 'LGykuFrzezHZo1h74' };
    // TODO: getID from list of all blogs lates
    this.id = 7;
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
    if (this.blogForm.invalid) {
      console.log('invalid Form');
      return;
    }
    // console.log('Title', this.blogForm.value.title);
    // console.log('f', this.files);
    // console.log('c', this.content);
    // console.log('H', this.blogForm);

    this.afs.collection('blog').add({
      'title': this.blogForm.value.title,
      'body': this.content,
      'id': this.id,
      'url': this.files,
      'userID': this.user.email
    });
    // this.blogCollection.add();
    this.router.navigate(['/dashboard/blog']);
  }
}
