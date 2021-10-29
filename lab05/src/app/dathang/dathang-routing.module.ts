import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DathangComponent } from './dathang.component';

const routes: Routes = [{ path: '', component: DathangComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DathangRoutingModule { }
