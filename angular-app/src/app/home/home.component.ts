import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const lib = window.require('lib');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  importLib() {
    try {
      lib.importSoapAndDoSomething();
    } catch(e) {
      console.error(e);
    }
  }

}
