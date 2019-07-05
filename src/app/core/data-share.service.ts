import { Injectable } from '@angular/core';

import { Question } from './models/question';

@Injectable({
    providedIn: 'root'
})
export class DataShareService {

    private data = [];

    setData(value: Question[]) {
        this.data = value;
    }

    getData() {
        return this.data;
    }
}
