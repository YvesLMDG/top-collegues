import { Avis, Collegue } from '../models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collegue',
  template: `
    <div class="text-center" *ngIf="collegue; else noCollegue">

      <div class="col-12" *ngIf="collegue.photoUrl; else elseBlock">
        <img [src]=collegue.photoUrl>
      </div>

      <div class="col-12">{{collegue.pseudo}}</div>
       <div *ngIf="collegue.score>=0; else scoreNegatif">+ {{collegue.score}}</div>
        <ng-template #scoreNegatif>
            <div>- {{-collegue.score}}</div>
        </ng-template>

      <ng-template #elseBlock>
        <div>{{alternativeContent}}</div>
      </ng-template>

      <app-avis [score]=collegue.score class="col-12" (avisClick)="traiter($event)"></app-avis>


    </div>
    <ng-template #noCollegue><div class="col-12">{{alternativeContent}}</div></ng-template>
  `,
  styles: [
    'img { width: 100%}'
  ]
})
export class CollegueComponent {

  @Input() collegue?: Collegue;

  alternativeContent = "????"

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

}
