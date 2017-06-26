import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomersComponent } from "./customers/customers.component";
import { NewCustomerComponent } from "./new-customer/new-customer.component";
import { DrinksfoodsComponent } from "./drinksfoods/drinksfoods.component";
import { NewDrinkfoodComponent } from "./new-drinkfood/new-drinkfood.component";

const APP_ROUTES: Routes = [
    { path: 'customers', component: CustomersComponent },
    { path: 'new-customer', component: NewCustomerComponent },
    { path: 'drinksfoods', component: DrinksfoodsComponent },
    { path: 'new-drinkfood', component: NewDrinkfoodComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);