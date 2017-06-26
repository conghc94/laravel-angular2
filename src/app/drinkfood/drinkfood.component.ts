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
    editing = false;
    editValueName = '';
    editValueDescription = '';
    editValuePrice = '';

    constructor(private drinkfoodService: DrinkfoodService) { }

    ngOnInit() {
    }
        
    onEdit() {
        this.editing = true;
        this.editValueName = this.drinkfood.name ;
        this.editValueDescription = this.drinkfood.description;
        this.editValuePrice = this.drinkfood.price;
    }
        
    onUpdate() {
        this.drinkfoodService.updateDrinkfood(this.drinkfood.id, this.editValueName, this.editValueDescription, this.editValuePrice)
        .subscribe(
            (drinkfood: Drinkfood) => {
                this.drinkfood.name = this.editValueName;
                this.drinkfood.description = this.editValueDescription;
                this.drinkfood.price = this.editValuePrice;
                this.editValueName = '';
                this.editValueDescription = '';
                this.editValuePrice = '';
            }
        );
        this.editing = false;
    }
    
    onCancel() {
        this.editValueName = '';
        this.editValueDescription = '';
        this.editValuePrice = '';
        this.editing = false;
    }
    
    onDelete() {
        this.drinkfoodService.deleteDrinkfood(this.drinkfood.id)
        .subscribe(
            () => {
                    this.drinkfoodDeleted.emit(this.drinkfood);
                    console.log('Drink food deleted');
                }
        );
    }
    
}