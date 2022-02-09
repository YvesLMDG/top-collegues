import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  template: `
      <button type="button" class="btn btn-primary btn-sm" (click)="onClickAimer()">{{textJaime}}</button>
      <button type="button" class="btn btn-danger btn-sm"  (click)="onClickDetester()">{{textJeDeteste}}</button>
  `,
  styles: [

  ]
})

export class AvisComponent implements OnInit {

  @Output() avisClick:EventEmitter<Avis> = new EventEmitter<Avis>();

  textJaime = "J'aime";
  textJeDeteste = "Je déteste";

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
