import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";
import { Drinkfood } from '../drinkfood.interface';
import { DrinkfoodService } from '../drinkfood.service';

@Component({
    selector: 'app-drinksfoods',
    templateUrl: './drinksfoods.component.html',
    styleUrls: ['./drinksfoods.component.css']
})
export class DrinksfoodsComponent implements OnInit {
    drinksfoods: Drinkfood[];

    constructor(private drinkfoodService: DrinkfoodService) {}

    ngOnInit() {
    }

    onGetDrinksfoods() {
        this.drinkfoodService.getDrinksfoods()
        .subscribe(
            (drinksfoods: Drinkfood[]) => this.drinksfoods = drinksfoods,
            (error: Response) => console.log(error)
        );
    }
    
    onDeleted(drinkfood: Drinkfood) {
        const position = this.drinksfoods.findIndex(
            (drinkfoodEl: Drinkfood) => {
                return drinkfoodEl.id == drinkfood.id;
            }
        );
        this.drinksfoods.splice(position, 1);
    }
}
