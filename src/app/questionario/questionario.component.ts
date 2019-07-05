import { QuestionarioService } from './questionario.service';
import { Question } from './../core/models/question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {

  questionsList: any[] = new Array()
  constructor(private service:QuestionarioService) { }

  ngOnInit() {

    this.service.getQuestions().subscribe( res=> {
      this.questionsList = res
    })
   
  }

}
