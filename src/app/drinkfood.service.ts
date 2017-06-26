import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class DrinkfoodService {
    constructor(private http: Http) {

    }
    
    getDrinksfoods(): Observable<any> {
        return this.http.get('http://localhost:8888/back-end/public/api/drinksfoods')
        .map(
            (response: Response) => {
                return response.json().drinksfoods;
            }
        );
    }
    
    addDrinkfood(name: string, description: string, price: string) {
        const body = JSON.stringify({name: name, description: description, price: price});
        const headers = new Headers({'Content-Type': 'aplication/json'});
        return this.http.post('http://localhost:8888/back-end/public/api/drinkfood', body, {headers: headers});
    }
        
    updateDrinkfood(id: number, newName: string, newDescription: string, newPrice: string) {
        const body = JSON.stringify({name: newName, description: newDescription, price: newPrice});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://localhost:8888/back-end/public/api/drinkfood/' + id, body, {headers: headers})
        .map(
            (response: Response) => response.json()
        );
    }
        
    deleteDrinkfood(id: number) {
        return this.http.delete('http://localhost:8888/back-end/public/api/drinkfood/' +id);
    }
}