import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Drinkfood } from '../drinkfood.interface';
import { DrinkfoodService } from "../drinkfood.service";

@Component({
    selector: 'app-drinkfood',
    templateUrl: './drinkfood.component.html',
    styleUrls: ['./drinkfood.component.css']
})
export class DrinkfoodComponent implements OnInit {
    @Input() drinkfood: Drinkfood;
    @Output() drinkfoodDeleted = new EventEmitter<Drinkfood>();
    

    constructor(private drinkfoodService: DrinkfoodService) { }

    ngOnInit() {
    }

}