import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SutdentAddComponent } from './sutdent-add/sutdent-add.component';
import { DisplayStudentComponent } from './display-student/display-student.component';

@NgModule({
  declarations: [
    AppComponent,
    SutdentAddComponent,
    DisplayStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
