import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

// import { UploadImgService } from './upload-img.service';

import { AngularFireStorage} from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {
  fileToUpload: File = null;

  uploadPercent: Observable<number>;
  // downloadURL: Observable<string>;
  storURL = [];
  preloadurls = [];
  testArr = [];

  profileUrl: Observable<string | null>;

  constructor(private afStorage: AngularFireStorage,
            //  private tokenService: UploadImgService
            ) {

   }



  ngOnInit() { }



  preloadsImg(event) {
    for (let i = 0; i <=  event.target.files['length'] - 1; i++) {
      if (event.target.files && event.target.files[i]) {

        // this.testArr.push(event.target.files[i]);
        // console.log(this.testArr);

        const reader = new FileReader();

        reader.onload = (eventtemp: any) => {
          const preloadurl = eventtemp.target.result;
          const preloadFile = event.target.files[i];
          this.preloadurls.push({index: i, url: preloadurl , file: preloadFile});
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  uploadFile() {

    for (let i = 0; i <=  this.preloadurls['length'] - 1; i++) {
      const file = this.preloadurls[i].file;
      // console.log(file);
      const date = new Date();
      const filePath = `img/${date.getTime()}${date.getMilliseconds()}`;
      const customMetadata = { filename: filePath, test: 'is ok' };
      const task = this.afStorage.upload(filePath, file,  { customMetadata });
      task.then(
        x =>  {
          this.storURL.push(x.downloadURL);
          console.log(this.storURL);
            }
      );
    }
  }


  deletingImg(element, i) {
    this.preloadurls.splice(i, 1);
  }


}
