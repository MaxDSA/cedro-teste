import { FormsModule } from '@angular/forms';
import { ItemQuestionarioComponent } from './item-questionario/item-questionario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionarioComponent } from './questionario.component';
import { MatRadioModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

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
