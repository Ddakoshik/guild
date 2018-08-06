import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Identifiers } from '@angular/compiler';

export interface Blog { title: string; user: string; content: string; }

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  data: any;



  private blogCollection: AngularFirestoreCollection<Blog>;
  blogs: Observable<Blog[]>;

  title: string;
  content: string;

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

  onBodyTextEditorKeyUp(event) {
    console.log('text is change', event);
  }

  pushArticle() {
    this.afs.collection('blog').add({'title': this.title, 'body': this.content, 'id': 6});
  }

}
