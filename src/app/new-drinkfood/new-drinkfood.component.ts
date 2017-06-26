import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { DrinkfoodService } from "../drinkfood.service";

@Component({
    selector: 'app-new-drinkfood',
    templateUrl: './new-drinkfood.component.html',
    styleUrls: ['./new-drinkfood.component.css']
})
export class NewDrinkfoodComponent implements OnInit {

    constructor(private drinkfoodService: DrinkfoodService) { }

    ngOnInit() {
    }
    
    onSubmit(form:NgForm) {
        this.drinkfoodService.addDrinkfood(form.value.name,form.value.description,form.value.price)
        .subscribe(
            () => alert('Drink, food create!')
        );
        form.reset();
    }
}
