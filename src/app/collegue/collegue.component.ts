import { DataService } from './../services/data.service';
import { Avis, Collegue } from '../models';
import { Component, Input, OnInit } from '@angular/core';
import { ScorePipe } from '../pipes/score.pipe';
import { ActivatedRoute, ParamMap } from '@angular/router';

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

      <div class="col-12" [routerLink]=collegue.pseudo>{{collegue.pseudo}}</div>

      <div class="col-12">{{collegue.score | score}}</div>

      <div class="row text-start inline" *ngIf="afficherNomPrenom && collegue.prenom">
        <div class="col-6">Prénom: </div><div class="col-6">{{collegue.prenom}}</div>
      </div>

      <div class="row text-start inline" *ngIf="afficherNomPrenom && collegue.nom">
        <div class="col-6">Nom: </div><div class="col-6">{{collegue.nom}}</div>
      </div>

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
  //pseudo:string|null;
  alternativeContent = "????"
  afficherNomPrenom = false;


  constructor(private dataService:DataService, private route: ActivatedRoute){
    //this.pseudo = route.snapshot.paramMap.get("pseudo");
  }

  ngOnInit():void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // récupération du paramètre pseudo
      const pseudo = params.get('pseudo');
      //this.afficherNomPrenom=true;
      this.dataService.listerUnCollegue(pseudo as string).subscribe(col=>{this.collegue=col});
    });
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
