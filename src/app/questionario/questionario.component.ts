import { QuestionarioService } from './questionario.service';
import { Question } from './../core/models/question';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {

  questionsList: any[] = new Array()
  constructor(private service:QuestionarioService,
    private router: Router) { }

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

}
