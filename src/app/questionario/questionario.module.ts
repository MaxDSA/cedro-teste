import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { ItemQuestionarioComponent } from './item-questionario/item-questionario.component';
import { QuestionarioComponent } from './questionario.component';

@NgModule({
  declarations: [
    QuestionarioComponent,
    ItemQuestionarioComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    QuestionarioComponent
  ],
})
export class QuestionarioModule { }
