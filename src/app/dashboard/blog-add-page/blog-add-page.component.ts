import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject, Observable, Subscription } from 'rxjs';
import { Blog, ImgFile } from '../../shared/models/blog.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CoreState, selectGoogleAuthInfo } from '../../Store/reducers';
import { GoogleAuthInfo } from '../../shared/models/auth.model';

@Component({
  selector: 'app-blog-add-page',
  templateUrl: './blog-add-page.component.html',
  styleUrls: ['./blog-add-page.component.css']
})
export class BlogAddPageComponent implements OnInit, OnDestroy {

  truncate = 100;
  cont = '12312';
  content = '';
  blogForm: FormGroup;
  isSubmitting = false;
  file: ImgFile;
  user$: Observable<GoogleAuthInfo>;
  user: GoogleAuthInfo;
  subscriptions: Subscription[] = [];
  id: number;

  constructor(
    private store$: Store<CoreState>,
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
    this.user$ = this.store$.pipe(select(selectGoogleAuthInfo));
    this.subscriptions.push(this.user$.subscribe(val => {
      this.user = val;
    }));
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

  ngOnDestroy() {
    this.subscriptions.forEach(sbs => sbs.unsubscribe());
  }
}
