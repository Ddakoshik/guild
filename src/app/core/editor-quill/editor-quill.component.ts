import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-editor-quill',
  templateUrl: './editor-quill.component.html',
  styleUrls: ['./editor-quill.component.scss']
})
export class EditorQuillComponent implements OnInit {


  html: string;


  @Input() editorContent = '123123 sd2112 ';
  @Input() style = {height: '400px'};
  @Input() customOptions = []; // [{import: 'attributors/style/size', whitelist: ['14']}, ];
  @Input() required = false; // false
  @Input() minLength = 0;  // 0
  @Input() maxLength = 0;  // 0
  @Input() isReadOnly = 0;  // false



  @Output() handleEditorCreatedEvent = new EventEmitter();
  @Output() handleChangeEvent = new EventEmitter();
  @Output() handleSelectionEvent = new EventEmitter();


  constructor() {}


  ngOnInit() {
  }


  handleEditorCreated(event: any) {
    this.handleEditorCreatedEvent.emit(event);
  }
  handleChange(event: any) {
    this.handleChangeEvent.emit(event);
  }
  handleSelection(event: any) {
    this.handleSelectionEvent.emit(event);
  }
}
