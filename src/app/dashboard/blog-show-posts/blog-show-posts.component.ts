import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Blog } from '../blog/blog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-show-posts',
  templateUrl: './blog-show-posts.component.html',
  styleUrls: ['./blog-show-posts.component.css']
})
export class BlogShowPostsComponent implements OnInit {

  htmlContent;

  blogpost = {
    title: 'Test add',
    user: 'user tester',
    content: 'Content Content ContentContentContentContentContentContentContent ContentContentContentContent Content ContentContentContent'
  };


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

  addArticle(blogpost: Blog) {
    this.blogCollection.add(blogpost);
  }

  onBodyTextEditorKeyUp(event) {
    console.log('text is change', event);
  }

  pushArticle() {
    this.afs.collection('blog').add({'title': this.title, 'body': this.content, 'id': 6});
  }


}
