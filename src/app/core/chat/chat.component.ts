import { Component, OnInit } from '@angular/core';
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
      user: 'tester1',
      data: new Date,
      userIcon: 'https://vanillapriest.files.wordpress.com/2017/09/wow-vanilla-priest.png?w=240'

     });
  }
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }

  testInfo() {
    console.log(this.itemsRef.snapshotChanges());
  }


}
