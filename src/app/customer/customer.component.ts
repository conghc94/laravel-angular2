import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from "../customer.interface";
import { CustomerService } from "../customer.service";

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    @Input() customer: Customer;
    @Output() customerDeleted = new EventEmitter<Customer>();
    editing = false;
    editValue = '';
    
    constructor(private customerService: CustomerService) { }

    ngOnInit() {
    }
  
    onEdit() {
        this.editing = true;
        this.editValue = this.customer.name;
    }
  
    onUpdate() {
        this.customerService.updateCustomer(this.customer.id, this.editValue)
        .subscribe(
            (customer: Customer) => {
                this.customer.name = this.editValue;
                this.editValue = '';
            }
        );
        this.editing = false;
    }
    
    onCancel() {
        this.editValue = '';
        this.editing = false;
    }
        
    onDelete() {
        this.customerService.deleteCustomer(this.customer.id)
            .subscribe(
                () => {
                    this.customerDeleted.emit(this.customer);
                    console.log('Customer deleted');
                }
            );
    }
}
