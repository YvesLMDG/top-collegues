import { Collegue } from './../models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  template: `
    <p>{{collegue | json}}</p>
    <form (ngSubmit)="submit()" #form="ngForm">
    <div class="form-group">
    <label>Pseudo</label><input class="form-control" [(ngModel)]="collegue.pseudo" #pseudo="ngModel" name="pseudo" required>
    <p *ngIf="pseudo.invalid">Le champ est invalide.</p>
    </div>
    <div class="form-group">
    <label>Nom</label><input class="form-control" [(ngModel)]="collegue.nom" name="nom"  #nom="ngModel" required  minlength="2">
    <p *ngIf="nom.invalid">Le champ est invalide.</p>
    </div>
    <div class="form-group">
    <label>Prénom</label><input class="form-control" [(ngModel)]="collegue.prenom" name="prenom"  #prenom="ngModel" required  minlength="2">
    <p *ngIf="prenom.invalid">Le champ est invalide.</p>
    </div>
    <div class="form-group">
    <label>PhotoUrl</label><input class="form-control" [(ngModel)]="collegue.photoUrl" name="photoUrl" #photoUrl="ngModel" required>
    <p *ngIf="photoUrl.invalid">Le champ est invalide.</p>
    </div>
    <button class="btn btn-primary" [disabled]="form.invalid" type="submit">Ajouter</button>
    </form>

  `,
  styles: [
  ]
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegue:Partial<Collegue> = {};
  formValid=false;

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.collegue);
  }
}
