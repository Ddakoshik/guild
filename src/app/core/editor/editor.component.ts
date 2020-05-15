import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-text-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  @Input() elementId: string;
  @Output() oneditorKeyup = new EventEmitter();

  htmlContent;
  constructor() { }

  ngOnInit() {
  }

  saveArticle() {
    this.oneditorKeyup.emit({intro : 'Test output', bodyhtml: this.htmlContent});
  }

}
