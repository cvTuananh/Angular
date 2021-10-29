import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../untill/product';

@Component({
  selector: 'app-add-sp',
  templateUrl: './add-sp.component.html',
  styleUrls: ['./add-sp.component.css']
})
export class AddSpComponent implements OnInit {
  products:Iproduct = {
    maSp:"",
    tenSp:"",
    gia:0
  }
  listProduct:Iproduct[] =[
    {maSp:"1D25",tenSp:"Iphone 3",gia:100.000},
    {maSp:"1DT20",tenSp:"Iphone 4",gia:100.000},
    {maSp:"1DIP",tenSp:"Iphone 5",gia:100.000},
    {maSp:"1D25",tenSp:"Iphone 6",gia:100.000},
    {maSp:"1D25",tenSp:"Iphone 7",gia:100.000}
  ];
  toalLength:any;
  page:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.toalLength = this.listProduct.length;
  } 
  addProduct(){
    this.listProduct.push({...this.products});
  }

}
