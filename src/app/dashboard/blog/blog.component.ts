import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface Blog { title: string; user: string; content: string; }

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  data: any;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: 'v1/images',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };


  private blogCollection: AngularFirestoreCollection<Blog>;
  blogs: Observable<Blog[]>;

  constructor(private afs: AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true });
  }



  ngOnInit() {
    this.blogCollection = this.afs.collection<Blog>('blog', ref => {
      return ref.orderBy('id');
    }); // referense
    this.blogs = this.blogCollection.valueChanges();
  }

  addItem(blogpost: Blog) {
    this.blogCollection.add(blogpost);
  }

}
