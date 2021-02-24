import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { MonacoEditorModule, MONACO_PATH } from '@materia-ui/ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { MonacoComponent } from './monaco/monaco.component';

@NgModule({
  declarations: [HomeComponent, MonacoComponent],
  imports: [CommonModule, HomeRoutingModule, MonacoEditorModule, FormsModule],
  providers: [{
    provide: MONACO_PATH,
    useValue: 'assets/monaco-editor/min/vs'
  }],
})
export class HomeModule {}
