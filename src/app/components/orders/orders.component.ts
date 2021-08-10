import { Component, OnInit } from '@angular/core';
import { StoreProductsService } from 'src/app/services/store-products.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Reorder } from 'src/app/models/reorder.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  reorders: Reorder[]
  constructor(private storeservice: StoreProductsService,
      private afs: AngularFirestore
    ) { }

  ngOnInit() {
    this.storeservice.getProcessedReorders().subscribe(actionArray => {
      this.reorders = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Reorder;
      })
    });
  }

}
