import { Component, OnInit } from '@angular/core';
import { Reorder } from 'src/app/models/reorder.model';
import { StoreProductsService } from 'src/app/services/store-products.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-reorders',
  templateUrl: './reorders.component.html',
  styleUrls: ['./reorders.component.scss']
})
export class ReordersComponent implements OnInit {

  reorders: Reorder[]
  constructor(private storeservice: StoreProductsService,
      private afs: AngularFirestore
    ) { }

  ngOnInit() {
    this.storeservice.getUnProcessedReorders().subscribe(actionArray => {
      this.reorders = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Reorder;
      })
    });
  }

}
