import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class DrinkfoodService {
    constructor(private http: Http) {

    }
    
    getDrinksfoods(): Observable<any> {
        return this.http.get('http://localhost:8888/laravel5-repository-pattern/public/api/drinksfoods')
        .map(
            (response: Response) => {
                return response.json().drinksfoods;
            }
        );
    }
}