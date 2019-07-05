import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { FinalComponent } from './final/final.component';
import { QuestionarioComponent } from './questionario/questionario.component';


const routes: Routes = [
  { path:  '', pathMatch:  'full', redirectTo:  '', component: InicioComponent },
  { path:  'questionario', component: QuestionarioComponent },
  { path:  'final', component: FinalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
