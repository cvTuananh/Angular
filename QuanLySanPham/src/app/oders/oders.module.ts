import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OderComponent } from './oder/oder.component';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'oder', component: OderComponent}
]

@NgModule({
  declarations: [
    OderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OdersModule { }
