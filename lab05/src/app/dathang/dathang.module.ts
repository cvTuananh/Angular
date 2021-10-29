import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DathangRoutingModule } from './dathang-routing.module';
import { DathangComponent } from './dathang.component';
import { DathangsComponent } from './dathang/dathangs/dathangs.component';


@NgModule({
  declarations: [
    DathangComponent,
    DathangsComponent
  ],
  imports: [
    CommonModule,
    DathangRoutingModule
  ]
})
export class DathangModule { }
