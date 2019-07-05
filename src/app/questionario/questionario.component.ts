import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataShareService } from '../core/data-share.service';
import { Question } from './../core/models/question';
import { QuestionarioService } from './questionario.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {

  questionsList: Question[] = new Array()

  constructor(
    private service:QuestionarioService,
    private router: Router,
    private dataShareService: DataShareService
    ) { }

  ngOnInit() {

    this.service.getQuestions().subscribe( res=> {
      this.questionsList = res
    })
   
  }

  reciverFeedback(response) {
    for(let q of this.questionsList){

      if(q.index === response.index){
          q = response
      }
  
    }
  }

  isValid(){
    return this.questionsList.find(x => {

      if(x.radioQuestion){
        return x.response === undefined
      }else{
        return x.selectQuestions.find(y => y.response === undefined)? true : false
      }
          
    }) ? false : true
  }

  back(){
    this.router.navigate(["/"])
  }

  save(){
    this.dataShareService.setData(this.questionsList)
    this.router.navigate(['/final'])
  }
}
