import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Blog } from '../../shared/models/blog.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-show-posts',
  templateUrl: './blog-show-posts.component.html',
  styleUrls: ['./blog-show-posts.component.scss']
})
export class BlogShowPostsComponent implements OnInit {
  private blogCollection: AngularFirestoreCollection<Blog>;
  blogs: Observable<Blog[]>;

  constructor(private afs: AngularFirestore, private router: Router) {
  }

  ngOnInit() {
    // TODO add in action effect
    this.blogCollection = this.afs.collection<Blog>('blog', ref => {
      return ref.orderBy('id');
    });
    this.blogs = this.blogCollection.valueChanges();
  }

  addNewPostInBlog() {
    this.router.navigate(['/dashboard/blog/add']);
}


}
