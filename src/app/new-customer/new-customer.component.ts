import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CustomerService } from "../customer.service";

@Component({
    selector: 'app-new-customer',
    templateUrl: './new-customer.component.html',
    styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
    }
    
    onSubmit(form:NgForm) {
        this.customerService.addCustomer(form.value.name)
            .subscribe(
                () => alert('Customer create!')
            );
            form.reset();
    }

}
