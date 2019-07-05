import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatDialogModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FinalModule } from './final/final.module';
import { InicioComponent } from './inicio/inicio.component';
import { QuestionarioModule } from './questionario/questionario.module';
import { TermosDeUsoComponent } from './inicio/termos-de-uso/termos-de-uso.component';

@NgModule({
   declarations: [
      AppComponent,
      InicioComponent,
      TermosDeUsoComponent,
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      CoreModule,
      FinalModule,
      FormsModule,
      MatButtonModule,
      MatCardModule,
      MatCheckboxModule,
      MatDialogModule,
      MatIconModule,
      QuestionarioModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      TermosDeUsoComponent
   ]
})
export class AppModule { }
