import { Question } from './../../core/models/question';
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-questionario',
  templateUrl: './item-questionario.component.html',
  styleUrls: ['./item-questionario.component.scss']
})
export class ItemQuestionarioComponent implements OnInit {

  @Input('question')
  question: Question

  @ViewChild('f', {static: false}) form: ElementRef;

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
