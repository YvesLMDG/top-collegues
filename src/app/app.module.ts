import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { ScorePipe } from './pipes/score.pipe';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { FormsModule } from '@angular/forms';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { Route, Router, Routes, RouterModule } from '@angular/router';

const routerConfig: Routes = [
  {
    path: 'collegues', component: ListeColleguesComponent
  },
  {
    path: 'form-template', component: NouveauCollegueTemplateFormComponent
  },
  {
    path:'collegues/:pseudo', component:CollegueComponent

  },
  { path: '', pathMatch: 'full', redirectTo: '/collegues' },
];

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    ScorePipe,
    NouveauCollegueTemplateFormComponent,
    MenuComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
