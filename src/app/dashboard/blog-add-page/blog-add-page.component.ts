import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { Blog } from '../../shared/models/blog.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

export interface ImgFile {
  fileUrl: string;
  name: string;
  timeCreated: Date;
}

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
  file: ImgFile;
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

  cancel() {
    this.router.navigate(['/dashboard/blog']);
  }

  getFiles($event) {
    this.file = $event;
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

    this.afs.collection('blog').add({
      'title': this.blogForm.value.title,
      'body': this.content,
      'id': this.id,
      'url': this.file.fileUrl,
      'urlName': this.file.name,
      'userID': this.user.email
    });
    this.router.navigate(['/dashboard/blog']);
  }
}
