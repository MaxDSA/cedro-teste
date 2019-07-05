import { Question } from './../../core/models/question';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item-questionario',
  templateUrl: './item-questionario.component.html',
  styleUrls: ['./item-questionario.component.scss']
})
export class ItemQuestionarioComponent implements OnInit {

  @Input('question')
  question: Question

  @ViewChild('f', {static: false}) form: ElementRef;

  constructor() { }

  ngOnInit() {
    
  }

  observeForm(question:Question, v: number){
    question.response = v
  }

}
