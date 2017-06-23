import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";

import { Customer } from "../customer.interface";
import { CustomerService } from "../customer.service"
@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
    customers: Customer[];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {

    }
  
    onGetCustomers() {
        this.customerService.getCustomers()
        .subscribe(
            (customers: Customer[]) => this.customers = customers,
            (error: Response) => console.log(error)
        );
    }

    onDeleted(customer: Customer) {
        const position = this.customers.findIndex(
            (customerEl: Customer) => {
                return customerEl.id == customer.id;
            }
        );
        this.customers.splice(position, 1);
    }
}
