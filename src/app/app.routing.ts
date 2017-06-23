import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomersComponent } from "./customers/customers.component";
import { NewCustomerComponent } from "./new-customer/new-customer.component";
import { DrinksfoodsComponent } from "./drinksfoods/drinksfoods.component";

const APP_ROUTES: Routes = [
    { path: '', component: CustomersComponent },
    { path: 'new-customer', component: NewCustomerComponent },
    { path: 'drinksfoods', component: DrinksfoodsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);