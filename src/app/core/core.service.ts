import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CoreService {

    base_api: string;

    constructor(private http: HttpClient) {
        this.base_api = `${environment.base_api_url}`;
    }

    private setHeaders(): HttpHeaders {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json, */*, *',
        }
        return new HttpHeaders(headersConfig);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(this.base_api + `${path}`, { headers: this.setHeaders(), params: params })
    }

}
