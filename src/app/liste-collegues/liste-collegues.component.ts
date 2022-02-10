import { Observable } from 'rxjs';
import { Collegue } from './../models';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-liste-collegues',
  template: `
    <div class ="container-fluid">
      <div *ngIf="collegues | async as liste" class="row">
        <div *ngFor="let col of liste" class="col-6 col-sm-4 col-md-3 col-xl-2"><app-collegue [collegue]=col></app-collegue></div>
      </div>
    </div>
  `,
  styles: [
  ]
})

export class ListeColleguesComponent implements OnInit {

  collegues:Observable<Collegue[]>;

  constructor(private dataService:DataService) {
    this.collegues= this.dataService.listerCollegues();
  }

  ngOnInit(): void {
  }

}
