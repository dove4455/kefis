import { Component, OnInit } from '@angular/core';
import { Reorder } from 'src/app/models/reorder.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoreProductsService } from 'src/app/services/store-products.service';

@Component({
  selector: 'app-wunprocessed',
  templateUrl: './wunprocessed.component.html',
  styleUrls: ['./wunprocessed.component.scss']
})
export class WunprocessedComponent implements OnInit {
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
