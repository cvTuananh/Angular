import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DeatialBlogComponent } from './deatial-blog/deatial-blog.component';
import { CatergoryComponent } from './catergory/catergory.component';
import { ProudctComponent } from './proudct/proudct.component';
import { OderComponent } from './oder/oder.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductdetialComponent } from './productdetial/productdetial.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    DeatialBlogComponent,
    CatergoryComponent,
    ProudctComponent,
    OderComponent,
    AddProductComponent,
    ProductdetialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
