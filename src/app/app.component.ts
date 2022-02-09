import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  template: `
    <div class ="container-fluid">
      <div class="row">
        <div class="col-md-2"><app-collegue [collegue]=collegue1></app-collegue></div>
        <div class="col-md-2"><app-collegue [collegue]=collegue1></app-collegue></div>
        <div class="col-md-2"></div>
        <div class="col-md-2"></div>
      </div>
    </div>
`,
  styles: [
  ]
})
export class AppComponent {
  title = 'top-collegues';

  collegue1: Collegue = {
    photoUrl: "https://opentoadventure.files.wordpress.com/2011/08/bender.png",
    pseudo: "Bender",
    score: 100000
  }

}

