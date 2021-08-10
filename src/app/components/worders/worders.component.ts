import { Component, OnInit } from '@angular/core';
import { Reorder } from 'src/app/models/reorder.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoreProductsService } from 'src/app/services/store-products.service';
import { StoreProducts } from 'src/app/models/storeProducts.model';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-worders',
  templateUrl: './worders.component.html',
  styleUrls: ['./worders.component.scss']
})
export class WordersComponent implements OnInit {

  quantity = 100;
  reorders: Reorder[]
  inventory: any;

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

  dispatchOrders(reorderId, productName, productId){
    this.afs.doc<Reorder>('Reorders/' + reorderId).update({
      status: "processed",
      dispatchDate: new Date(),
      quantiity: this.quantity
      

    })

    let update = false;
    if (!update){
      update = true
      this.updateInventory(productId)
      return;
    }
   return;
          
  }

      updateInventory(productId){
        let update = false
        if(!update){
          update = true;
           
            this.afs.doc<Products>('Products/'+ productId).valueChanges().subscribe(child=>{
            if(child.inventory >= this.quantity){
              this.dispatchtoStore(productId);
              this.inventory= child.inventory - this.quantity;
              if(child.dispatch){
                this.updateWarehouseInventory(productId, this.inventory, child.dispatch);
                return;
              }
             
            }else{
              window.alert("You do not have enough stock")
            }
          })
        
        }else{
          //do nothing
        }

      }

      dispatchtoStore(productId){
        this.afs.doc<StoreProducts>('StoreProducts/'+ productId).valueChanges().subscribe(child=>{
          this.inventory= child.inventory + this.quantity ;
          if(child.dispatch == "no"){
            this.updateStoreInventory(productId, this.inventory, child.dispatch);
            return;
          }
          
  
          })
      }

      updateStoreInventory(productId, inventory, dispatch){
        if(dispatch == "no"){
          this.afs.doc('StoreProducts/'+ productId).update({
            inventory: inventory,
            dispatch: "yes" 
        })
        return;
        }
        return;          
        
      }

      updateWarehouseInventory(productId, inventory, dispatch){
       if(dispatch == "no"){
        this.afs.doc('Products/'+ productId).update({
          inventory: inventory,
          dispatch: "yes"
        })
        return;
       }
        return;
      }
    }
