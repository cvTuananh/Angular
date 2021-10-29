import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../until/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-proudct',
  templateUrl: './proudct.component.html',
  styleUrls: ['./proudct.component.css']
})
export class ProudctComponent implements OnInit {
  toalLength:any;
  page:number=1;
  // data:Iproduct[]= [
  //   {id:15,name: 'Iphone',price:65.0000},
  //   {id:16,name: 'NoteBadge',price:89.000},
  //   {id:17,name: 'Samsung',price:90.0000}
  // ];
  // product:Iproduct={
  //   id:0,
  //   name: '',
  //   price:0
  // }
  listProduct:Iproduct[] =[];
  constructor(private prodService:ProductsService) { }

  ngOnInit(): void {
    this.toalLength = this.listProduct.length;
    this.prodService.getAll();
    
  }
  // addProduct(value:Iproduct){
  //   this.listProduct=this.data;
  //   this.listProduct.push({...value});
  // }

}

