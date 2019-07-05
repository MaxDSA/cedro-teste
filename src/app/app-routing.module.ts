import { QuestionarioComponent } from './questionario/questionario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path:  '', pathMatch:  'full', redirectTo:  '', component: InicioComponent },
  { path:  'questionario', component: QuestionarioComponent },
  //{ path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
