import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

export interface Blog { title: string; user: string; content: string; }

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  addNewPostInBlog() {
      this.router.navigate(['/dashboard/blog/add']);
  }

}
