import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  template: `
  <nav>
    <ul class="nav nav-pills nav-fill">
      <li routerLink="/collegues" routerLinkActive="active" class="nav-link">Accueil</li>
      <li routerLink="/form-template" routerLinkActive="active" class="nav-link">Formulaire piloté par le template</li>
    </ul>
  </nav>
  `,
  styles: [
  ]
})
export class MenuComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
