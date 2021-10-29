import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Iproduct } from '../until/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Iproduct={
    id:0,
    name: '',
    price:0
  }
  listProduct:Iproduct[] =[];
  @Output() addEventProduct = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addProduct(){
    this.addEventProduct.emit(this.product);
  }
}
