import { Routes } from '@angular/router';
import { LoginComponent } from './app/components/login/login.component';
import { StoreComponent } from './app/components/store/store.component';
import { OrdersComponent } from './app/components/orders/orders.component';
import { ReordersComponent } from './app/components/reorders/reorders.component';
import { SalesComponent } from './app/components/sales/sales.component';
import { WarehouseComponent } from './app/components/warehouse/warehouse.component';
import { WordersComponent } from './app/components/worders/worders.component';
import { WprocessedComponent } from './app/components/wprocessed/wprocessed.component';
import { WunprocessedComponent } from './app/components/wunprocessed/wunprocessed.component';

export const appRoutes: Routes = [
   { 
    path: 'login',
   component: LoginComponent
},
{
    path: '',
    component: StoreComponent
}, 
{
    path: 'reorders',
    component: OrdersComponent
},
{
    path: 'unpreorders',
    component: ReordersComponent
},
{
    path: 'sales',
    component: SalesComponent
},
{
    path: 'home',
    component: WarehouseComponent
},
{
    path: 'orders',
    component: WordersComponent
},
{
    path: 'processed',
    component: WprocessedComponent
},
{
    path: 'unprocessed',
    component: WunprocessedComponent
}

]