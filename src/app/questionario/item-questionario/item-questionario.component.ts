import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Question } from './../../core/models/question';

@Component({
  selector: 'app-item-questionario',
  templateUrl: './item-questionario.component.html',
  styleUrls: ['./item-questionario.component.scss']
})
export class ItemQuestionarioComponent implements OnInit {

  @Input('question')
  question: Question

  @Output() response = new EventEmitter()

  constructor() { }

  ngOnInit() {
    
  }

  observeForm(question:Question, v: number, selectQuestion?: string){
    if(question.radioQuestion){
      question.response = v
    }else{
      question.selectQuestions.find(x => x.question === selectQuestion).response = v
    }
    this.response.emit(question)
  }

}
