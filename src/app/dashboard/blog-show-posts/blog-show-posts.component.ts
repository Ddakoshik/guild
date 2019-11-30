import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Blog } from '../../shared/models/blog.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private afs: AngularFirestore, private router: Router) {
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

  addNewPostInBlog() {
    this.router.navigate(['/dashboard/blog/add']);
}


}
