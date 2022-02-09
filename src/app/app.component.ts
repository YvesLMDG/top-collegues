import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  template: `
    <div class ="container-fluid">
      <div class="row">
        <div class="col-md-2"><app-collegue [collegue]=bender></app-collegue></div>
        <div class="col-md-2"><app-collegue [collegue]=fry></app-collegue></div>
        <div class="col-md-2"><app-collegue [collegue]=></app-collegue></div>
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

  bender: Collegue = {
    photoUrl: "https://opentoadventure.files.wordpress.com/2011/08/bender.png",
    pseudo: "Bender",
    score: 900
  }


  fry: Collegue = {
    photoUrl: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/1/11/Fry.jpg",
    pseudo: "Fry",
    score: -900
  }

}

