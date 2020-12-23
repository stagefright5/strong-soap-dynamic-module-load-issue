import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
})
export class MonacoComponent implements OnInit {

  model;

  editorConfig = {
    language: 'typescript',
    mouseWheelZoom: true,
    scrollBeyondLastLine: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
