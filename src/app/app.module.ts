import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { StoreComponent } from './components/store/store.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ReordersComponent } from './components/reorders/reorders.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { SalesComponent } from './components/sales/sales.component';
import { WordersComponent } from './components/worders/worders.component';
import { WprocessedComponent } from './components/wprocessed/wprocessed.component';
import { WunprocessedComponent } from './components/wunprocessed/wunprocessed.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoreComponent,
    WarehouseComponent,
    OrdersComponent,
    ReordersComponent,
    SalesComponent,
    WordersComponent,
    WprocessedComponent,
    WunprocessedComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [AngularFirestore],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
