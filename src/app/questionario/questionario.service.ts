import { CoreService } from './../core/core.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Question } from '../core/models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

constructor(private api: CoreService) { }

  getQuestions(): Observable<Question[]> {
    return this.api.get(`questions`)
  }

}
