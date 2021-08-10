import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponent } from './store.component';
import { StoreProductsService } from 'src/app/services/store-products.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;
  let service: StoreProductsService
  let spy: any;
  let afs: AngularFirestore
 let submitEl: DebugElement;
  let button: ElementRef;
  
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [StoreComponent]
    });
  });
  

  beforeEach(() => {
   
    component = fixture.componentInstance;
    submitEl = fixture.debugElement;
    button = submitEl.query(By.css('button'))
  });

 describe('Method: sellProduct', () => {
  it('should call the `createSale` method on the `StoreProductsService`', () => {
    spy = spyOn(service, 'createSale');
    component.sellProduct("Sugar", "84jfhs8s", 120, 25, 5);
    expect(spy).toHaveBeenCalled();
  });
 })
  

});
