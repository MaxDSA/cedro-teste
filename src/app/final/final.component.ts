import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataShareService } from './../core/data-share.service';
import { Question } from '../core/models/question';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  questionsList: Question[]

  constructor(
    private dataShareService: DataShareService,
    private router: Router
  ) { }

  ngOnInit() {
    this.questionsList = this.dataShareService.getData()
  }

  back(){
    this.router.navigate(['questionario'])
  }
}
