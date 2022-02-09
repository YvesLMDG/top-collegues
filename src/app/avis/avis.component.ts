import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis',
  template: `
      <button type="button" class="btn btn-primary btn-sm">{{textJaime}}</button>
      <button type="button" class="btn btn-danger btn-sm">{{textJeDeteste}}</button>
  `,
  styles: [

  ]
})

export class AvisComponent implements OnInit {

  textJaime = "J'aime";
  textJeDeteste = "Je déteste";

  constructor() { }

  ngOnInit(): void {
  }

}
