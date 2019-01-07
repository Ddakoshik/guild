import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class UserDataService {


  endpoint = 'https://hnpwa.com/api/v0/news.json';
  userdata;

  constructor(private http: HttpClient,
              private userauth: AngularFireAuth) { }


  // getUserdata() {
  //   const user = this.userauth.authState;
  //   // console.log(user);
  //   user.subscribe(
  //     (data) => {
  //         this.userdata = data;
  //     });
  //     return this.userdata;
  // }
  getTopPosts() {
    return this.http.get(this.endpoint);
  }

  getPost(postId: string) {
    const endpoint = 'https://hnpwa.com/api/v0/item';

    return this.http.get(`${endpoint}/${postId}.json`);
  }
}

