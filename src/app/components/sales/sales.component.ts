import { Component, OnInit } from '@angular/core';
import { StoreProductsService } from 'src/app/services/store-products.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Sales } from 'src/app/models/sales.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  sales: Sales[];

  constructor(private storeservice: StoreProductsService,
    private afs: AngularFirestore) { }

  ngOnInit() {
    this.storeservice.getSales().subscribe(actionArray => {
      this.sales = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Sales;
      })
    });
  }

}
