import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { routing } from "./app.routing";
import { CustomerService } from "./customer.service";
import { DrinkfoodComponent } from './drinkfood/drinkfood.component';
import { DrinksfoodsComponent } from './drinksfoods/drinksfoods.component';
import { NewDrinkfoodComponent } from './new-drinkfood/new-drinkfood.component';
import { DrinkfoodService } from "./drinkfood.service";
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { NewOrderComponent } from './new-order/new-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomersComponent,
    NewCustomerComponent,
    DrinkfoodComponent,
    DrinksfoodsComponent,
    NewDrinkfoodComponent,
    OrderComponent,
    OrdersComponent,
    NewOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CustomerService, DrinkfoodService],

  bootstrap: [AppComponent]
})
export class AppModule { }
