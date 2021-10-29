
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DeatialBlogComponent } from './deatial-blog/deatial-blog.component';
import { CatergoryComponent } from './catergory/catergory.component';
import { OderComponent } from './oder/oder.component';
import { ProudctComponent} from './proudct/proudct.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path: 'home', component: BlogComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path:'deatial/:id',component:DeatialBlogComponent},
  {path:'catergory',component:CatergoryComponent},
  {path:'proudct',component:ProudctComponent},
    {path:'product/new',component:AddProductComponent},
  // {path:'new',component:AddProductComponent},
  {path:'oder',component:OderComponent},
  { path: 'dathang', loadChildren: () => import('./dathang/dathang.module').then(m => m.DathangModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
