import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddSpComponent } from './add-sp/add-sp.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:AddSpComponent},
  {path:'product-detail/:id',component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
