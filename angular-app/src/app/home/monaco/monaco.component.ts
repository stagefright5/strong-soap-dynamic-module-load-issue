import { Component, OnInit, ViewChild } from '@angular/core';
import { MonacoEditorComponent, MonacoEditorConstructionOptions, MonacoEditorLoaderService, MonacoStandaloneCodeEditor } from '@materia-ui/ngx-monaco-editor';
import { filter, take } from 'rxjs/operators';
@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
})
export class MonacoComponent {
  @ViewChild(MonacoEditorComponent, { static: false })
  monacoComponent: MonacoEditorComponent;
  editorOptions: MonacoEditorConstructionOptions = {
    theme: "myCustomTheme",
    language: "html",
    roundedSelection: true,
    autoIndent: "full"
  };
  code = this.getCode();

  constructor(private monacoLoaderService: MonacoEditorLoaderService) {
    this.monacoLoaderService.isMonacoLoaded$
      .pipe(
        filter(isLoaded => isLoaded),
        take(1)
      )
      .subscribe(() => {
        monaco.editor.defineTheme("myCustomTheme", {
          base: "vs-dark", // can also be vs or hc-black
          inherit: true, // can also be false to completely replace the builtin rules
          rules: [
            {
              token: "comment",
              foreground: "ffa500",
              fontStyle: "italic underline"
            },
            { token: "comment.js", foreground: "008800", fontStyle: "bold" },
            { token: "comment.css", foreground: "0000ff" } // will inherit fontStyle from `comment` above
          ],
          colors: {}
        });
      });
  }

  editorInit(editor: MonacoStandaloneCodeEditor) {
    console.log('THIS IS NOT GETTING LOGGED!!', editor)
    // monaco.editor.setTheme('vs');
    // editor.setSelection({
    //   startLineNumber: 1,
    //   startColumn: 1,
    //   endColumn: 50,
    //   endLineNumber: 3
    // });
  }

  getCode() {
    return (
      // tslint:disable-next-line: max-line-length
      '<html><!-- // !!! Tokens can be inspected using F1 > Developer: Inspect Tokens !!! -->\n<head>\n	<!-- HTML comment -->\n	<style type="text/css">\n		/* CSS comment */\n	</style>\n	<script type="javascript">\n		// JavaScript comment\n	</' +
      "script>\n</head>\n<body></body>\n</html>"
    );
  }

}
