import { Injectable } from '@angular/core';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreProductsService {

   id

  constructor( private afs:AngularFirestore) { }
  getStoreProducts(){
   return this.afs.collection('StoreProducts').snapshotChanges();
  }

  createSale(productName, productId, unitPrice, quantity){
    return this.afs.collection('Sales').add({
      productId: productId,
      productName: productName,
      quantity: quantity,
      unitPrice: unitPrice,
      amount: unitPrice*quantity,
      date: new Date()

    })
  }

  getSales(){
    return this.afs.collection('Sales').snapshotChanges();
   }

   
   createReorder(productId, productName, unitPrice){
    this.id = Math.floor(Math.random() * 1000000000000 + 1000).toString();
    return this.afs.collection('Reorders').doc(this.id).set({
      reorderId: this.id,
      productId: productId,
      productName: productName,
      reorderDate: new Date(),
      dispatchDate: new Date(),
      quantiity: 0,
      unitPrice: unitPrice,
      status: "pending",
     })
    
   }

   getProcessedReorders(){
    return this.afs.collection('Reorders', (ref)=> ref.where('status', '==', 'processed')).snapshotChanges();
   }

   getUnProcessedReorders(){
    return this.afs.collection('Reorders', (ref)=> ref.where('status', '==', 'pending')).snapshotChanges();
   }

   getProducts(){
    return this.afs.collection('Products').snapshotChanges();
   }

}
