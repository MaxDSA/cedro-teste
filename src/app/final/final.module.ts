import { FinalComponent } from './final.component';
import { ItemRespostaComponent } from './item-resposta/item-resposta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [
      ItemRespostaComponent,
      FinalComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      MatButtonModule,
      MatIconModule
    ],
    exports: [
      FinalComponent,
    ],
  })
  export class FinalModule { }