import { Component, OnInit } from '@angular/core';
import { StoreProducts } from 'src/app/models/storeProducts.model';
import { StoreProductsService } from 'src/app/services/store-products.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  quantity = 5;
  storeproducts:StoreProducts[];

  constructor(private storeservice: StoreProductsService,
      private afs: AngularFirestore
    ) { }

  ngOnInit() {
    this.storeservice.getStoreProducts().subscribe(actionArray => {
      this.storeproducts = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as StoreProducts;
      })
    });
  }

  sellProduct(productName, productId, unitPrice, inventory, reorderLevel){
    if(inventory <= 0){
      window.alert("Out of Stock. You can't make any more sales")
    }
    else {
    this.storeservice.createSale(productName, productId, unitPrice, this.quantity);
    this.updateInventory(productId, inventory, this.quantity);
    if(inventory = reorderLevel){
      this.reorderFromWarehouse(productId, productName, unitPrice)
      this.updateDispatchStatus(productId);
      this.updateWareHouseStatus(productId);
      return;
    }
    return;
  }
}

  updateInventory(productId, inventory, quantity){
    this.afs.doc('StoreProducts/'+ productId).update({
      inventory: inventory - quantity
    })
    return;
  }

  reorderFromWarehouse(productId, productName, unitPrice){
    this.storeservice.createReorder(productId, productName, unitPrice);
    return;
  }

  updateDispatchStatus(productId){
    this.afs.doc('StoreProducts/'+ productId).update({
      dispatch: "no"
    })
    return;
  }
  updateWareHouseStatus(productId){
    this.afs.doc('Products/'+ productId).update({
      dispatch: "no"
      
    })
    return;
  }

  makesale(inventory, quantity){
 return inventory - quantity;

  }
}
