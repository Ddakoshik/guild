import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  nowData = new Date;

  @ViewChild('newitem') elForm: ElementRef;

  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('messages');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  ngOnInit() {

  }


 

  addItem(newName: string) {
    this.itemsRef.push({
      text: newName,
      user: 'tester5',
      date: +new Date,
      userIcon: 'https://vanillapriest.files.wordpress.com/2017/09/wow-vanilla-priest.png?w=240',
    });
    this.elForm.nativeElement.value = "";
  }


  updateItem(key: string, newText: string) {
    
  }

  updateMsgItem($event) {
    this.itemsRef.update($event.key, { text: $event.newText });
  }

  deleteMsgItem($event) {
    this.itemsRef.remove($event);
  }


  deleteEverything() {
    this.itemsRef.remove();
  }

  testInfo() {
    console.log(this.itemsRef.snapshotChanges());
  }


}
