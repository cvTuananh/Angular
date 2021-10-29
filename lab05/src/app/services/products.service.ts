import { Injectable } from '@angular/core';
import { Iproduct } from '../until/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Iproduct[]= [
    {id:15,name: 'Iphone',price:65.0000},
    {id:16,name: 'NoteBadge',price:89.000},
    {id:17,name: 'Samsung',price:90.0000}
  ];
  constructor() { }
  getAll(){
    return this.products;
  }
  getProductByID(id: number){
    this.products.find(p => p.id === id);
  }
  deleteProduct(id: number){
    let product:any= this.products.find(p => p.id === id);
    let index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
}
