import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class CustomerService {
    constructor(private http: Http) {

    }

    addCustomer(name: string) {
        const body = JSON.stringify({name: name});
        const headers = new Headers({'Content-Type': 'aplication/json'});
        return this.http.post('http://localhost:8888/laravel5-repository-pattern/public/api/customer', body, {headers: headers});
    }
    
    getCustomers(): Observable<any> {
        return this.http.get('http://localhost:8888/laravel5-repository-pattern/public/api/customers')
        .map(
            (response: Response) => {
                return response.json().customers;
            }
        );
    }
        
    updateCustomer(id: number, newName: string) {
        const body = JSON.stringify({name: newName});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://localhost:8888/laravel5-repository-pattern/public/api/customer/' + id, body, {headers: headers})
        .map(
            (response: Response) => response.json()
        );
    }
    
    deleteCustomer(id: number) {
        return this.http.delete('http://localhost:8888/laravel5-repository-pattern/public/api/customer/' +id);
    }
}