import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { QuillModule } from 'ngx-quill';


import * as QuillNamespace from 'quill';
const Quill: any = QuillNamespace;
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

// this.editor_modules = {
//   toolbar: {
//     container: [
//       [{ 'font': [] }],
//       [{ 'size': ['small', false, 'large', 'huge'] }],
//       ['bold', 'italic', 'underline', 'strike'],
//       [{ 'header': 1 }, { 'header': 2 }],
//       [{ 'color': [] }, { 'background': [] }],
//       [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//       [{ 'align': [] }],
//       ['link', 'image']
//     ]
//   },
//   imageResize: true
// };


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
