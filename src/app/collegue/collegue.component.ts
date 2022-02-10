import { DataService } from './../services/data.service';
import { Avis, Collegue } from '../models';
import { Component, Input } from '@angular/core';
import { ScorePipe } from '../pipes/score.pipe';

@Component({
  selector: 'app-collegue',
  template: `
    <div class="text-center" *ngIf="collegue; else noCollegue">

      <div class="col-12" *ngIf="collegue.photoUrl">
        <img [src]=collegue.photoUrl>
      </div>
      <div class="col-12" *ngIf="collegue.photo">
        <img [src]=collegue.photo>
      </div>

      <div class="col-12">{{collegue.pseudo}}</div>
      <div class="col-12">{{collegue.score | score}}</div>
      <app-avis [score]=collegue.score class="col-12" (avisClick)="donnerAvis($event)"></app-avis>


    </div>
    <ng-template #noCollegue><div class="col-12">{{alternativeContent}}</div></ng-template>
  `,
  styles: [
    'img { width: 100%}'
  ]
})
export class CollegueComponent {

  @Input() collegue!: Collegue;

  alternativeContent = "????"

  constructor(private dataService:DataService){

  }

  traiter(avis: Avis) {
    if (this.collegue){
      if (avis == Avis.AIMER){
        this.collegue.score+= 10;
      }
      else if(avis == Avis.DETESTER){
        this.collegue.score-= 100;
      }
    }
  }

  donnerAvis(avis: Avis){
    this.dataService.donnerUnAvis(this.collegue,avis).subscribe(collegue=>{this.collegue.score=collegue.score});
  }

}
