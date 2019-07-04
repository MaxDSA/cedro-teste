import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { MatCardModule, MatButtonModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { InicioComponent } from './inicio/inicio.component';
import { TermosDeUsoComponent } from './inicio/termos-de-uso/termos-de-uso.component';

@NgModule({
   declarations: [
      AppComponent,
      InicioComponent,
      TermosDeUsoComponent
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      CoreModule,
      MatButtonModule,
      MatCardModule,
      MatCheckboxModule,
      MatDialogModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents:[
      TermosDeUsoComponent
   ]
})
export class AppModule { }
