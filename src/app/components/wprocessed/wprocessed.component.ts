import { Component, OnInit } from '@angular/core';
import { Reorder } from 'src/app/models/reorder.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoreProductsService } from 'src/app/services/store-products.service';

@Component({
  selector: 'app-wprocessed',
  templateUrl: './wprocessed.component.html',
  styleUrls: ['./wprocessed.component.scss']
})
export class WprocessedComponent implements OnInit {
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
