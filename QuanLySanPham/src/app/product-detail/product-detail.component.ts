import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { Iproduct } from '../untill/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  listProduct:Iproduct[] =[
    {maSp:"1D25",tenSp:"Iphone 3",gia:100.000},
    {maSp:"1DT20",tenSp:"Iphone 4",gia:100.000},
    {maSp:"1DIP",tenSp:"Iphone 5",gia:100.000},
    {maSp:"1D25",tenSp:"Iphone 6",gia:100.000},
    {maSp:"1D25",tenSp:"Iphone 7",gia:100.000}
  ];
  product:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.product=this.listProduct.find(p => p.maSp === id);
  }

}
