import { Component, OnInit } from '@angular/core';
const lib = window.require('lib');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  importLib() {
    try {
      lib.importSoapAndDoSomething();
    } catch(e) {
      console.error(e);
    }
  }

}
