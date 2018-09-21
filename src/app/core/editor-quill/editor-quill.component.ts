import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-editor-quill',
  templateUrl: './editor-quill.component.html',
  styleUrls: ['./editor-quill.component.scss']
})
export class EditorQuillComponent implements OnInit {




  @Input() editorContent: string;
  @Input() style: object = {height: '400px'};
  @Input() customOptions;  // [{import: 'attributors/style/size', whitelist: ['14']}, ];
  @Input() required: boolean; // false
  @Input() minLength: number;  // 0
  @Input() maxLength: number;  // 0
  @Input() isReadOnly: boolean;  // false



  // @Output() handleEditorCreatedEvent: EventEmitter = new EventEmitter;
  // @Output() handleChangeEvent: EventEmitter = new EventEmitter;
  // @Output() handleSelectionEvent: EventEmitter = new EventEmitter;


  constructor() {}


  ngOnInit() {
  }


  // handleEditorCreated(event: any) {
  //   this.handleEditorCreatedEvent.emit(event);
  // }
  // handleChange(event: any) {
  //   this.handleChangeEvent.emit(event);
  // }

  // handleSelection(event: any) {
  //   this.handleSelectionEvent.emit(event);
  // }
}
