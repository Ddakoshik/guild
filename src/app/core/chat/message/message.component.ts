import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  cantEdit = true;
  acauntuser = 'tester5';   /*TODO: Conect user data to this parameter*/

  @Input() item: any;
  @Output() updateMsgEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteMsgEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }



  ngOnInit() {

  }

  updateItem(key: string, newText: string) {
    console.log('alert');
    const msg = {key , newText};
    this.updateMsgEvent.emit(msg);
    // this.itemsRef.update(key, { text: newText });
    this.cantEdit = true;
  }

  deleteItem(key: string) {
    this.deleteMsgEvent.emit(key);
  }

}
