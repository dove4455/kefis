import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { StoreProductsService } from 'src/app/services/store-products.service';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
 products: Products[];
  constructor(
    private storeservice: StoreProductsService,
    private afs: AngularFireStorage,) { }

  ngOnInit() {

    this.storeservice.getProducts().subscribe(actionArray => {
      this.products = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Products;
      })
    });
  }

}
