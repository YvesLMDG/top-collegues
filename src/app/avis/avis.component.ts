import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis [score]',
  template: `
      <button type="button" class="btn btn-primary btn-sm" [disabled]="score>scoreSeuil" (click)="onClickAimer()">{{textJaime}}</button>
      <button type="button" class="btn btn-danger btn-sm"  [disabled]="score<-scoreSeuil" (click)="onClickDetester()">{{textJeDeteste}}</button>
  `,
  styles: [

  ]
})

export class AvisComponent implements OnInit {

  @Input() score!:number;
  @Output() avisClick:EventEmitter<Avis> = new EventEmitter<Avis>();

  textJaime = "J'aime";
  textJeDeteste = "Je déteste";

  scoreSeuil = 999;

  constructor() { }

  ngOnInit(): void {
  }

  onClickAimer(){
    this.avisClick.emit(Avis.AIMER);
  }

  onClickDetester(){
    this.avisClick.emit(Avis.DETESTER);
  }
}
