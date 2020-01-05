import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { OrderAddComponent } from './order-add/order-add.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'add', component: OrderAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
