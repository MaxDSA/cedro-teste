import { Component, OnInit, Input } from '@angular/core';

import { Question } from 'src/app/core/models/question';

@Component({
  selector: 'app-item-resposta',
  templateUrl: './item-resposta.component.html',
  styleUrls: ['./item-resposta.component.scss']
})
export class ItemRespostaComponent implements OnInit {

  @Input('question')
  question: Question

  constructor() { }

  ngOnInit() {
    console.log(this.question)
  }
  response(): string{
    if(this.question.radioQuestion){
      return this.question.itens.find(x => x.value === this.question.response).description
    }else{
      let str = ''

      for(let q of this.question.selectQuestions){
        str = str.concat("<strong>" + q.question + ": &nbsp&nbsp</strong>" )
        str = str.concat(q.selectOptions.find(x => x.value === q.response).description + " <br/><br/>")
      }

      return str
    }
  }

}
