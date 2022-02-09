import { Avis, Collegue } from '../models';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collegue',
  template: `
    <div  class="text-center" *ngIf=collegue>
      <div class="col-12" *ngIf="collegue.photoUrl; else elseBlock">
        <img [src]=collegue.photoUrl width="100%">
      </div>
      <div class="col-12" *ngIf="collegue.pseudo; else elseBlock">{{collegue.pseudo}}</div>
      <div class="col-12" *ngIf="collegue.score; then thenBlock; else elseBlock">+ {{collegue.score}}</div>
      <ng-template #thenBlock>
        <div *ngIf="collegue.score>0, else scoreNegatif">+ {{collegue.score}}</div>
          <ng-template #scoreNegatif>
            <div>- {{-collegue.score}}</div>
          </ng-template>
      </ng-template>
      <ng-template #elseBlock>
        <div>{{alternativeContent}}</div>
      </ng-template>


      <app-avis class="col-12" (avisClick)="traiter($event)"></app-avis>

    </div>
  `,
  styles: [
  ]
})
export class CollegueComponent implements OnInit {

  @Input() collegue?: Collegue;

  alternativeContent = "????"

  constructor() {

  }

  ngOnInit(): void {
  }

  traiter(avis: Avis) {
    if (this.collegue?.score){
      if (avis == Avis.AIMER){
        this.collegue.score+= 10;
      }
      else if(avis == Avis.DETESTER){
        this.collegue.score-= 100;
      }

    }
  }

}
