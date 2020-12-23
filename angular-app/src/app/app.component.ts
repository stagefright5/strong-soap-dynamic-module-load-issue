import { Component } from '@angular/core';
import { ElectronService } from './core/services';

//#region first half
// window.require ("fs-extra")
// window.require ("fuzzysort")
// window.require ("get-port")
// window.require ("hammerjs")
// window.require ("http-status-codes")
// window.require ("jsonfile")
// window.require ("kill-port-process")
// window.require ("monaco-editor")
// window.require ("node-pty")
// window.require ("node-sass")
// window.require ("ps-node")
// window.require ("semver")
// window.require ("validate-npm-package-name")
//#endregion

//#region second half
// window.require("@materia-ui/ngx-monaco-editor")
// window.require("@thisissoon/angular-inviewport")
// window.require("@thisissoon/angular-scrollspy")
// window.require("axios")
// window.require("cross-spawn")
// window.require("electron-log")
// window.require("electron-updater")
// window.require("fix-path")
//#endregion
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private electronService: ElectronService,
  ) {
    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }
  }
}
