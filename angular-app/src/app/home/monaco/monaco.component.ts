import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
})
export class MonacoComponent implements OnInit {

  editorConfig: monaco.editor.IEditorConstructionOptions = {
    language: 'typescript',
    mouseWheelZoom: true,
    scrollBeyondLastLine: true,
    theme: 'vs-dark'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
