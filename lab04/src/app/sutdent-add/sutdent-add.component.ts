import { Component, EventEmitter, OnInit , Output } from '@angular/core';
import { IStudent } from '../until/student';

@Component({
  selector: 'app-sutdent-add',
  templateUrl: './sutdent-add.component.html',
  styleUrls: ['./sutdent-add.component.scss']
})
export class SutdentAddComponent implements OnInit {
  student:IStudent={
    FirstName: "",
    LastName: "",
    Age:0,
    City:"",
    date:""
  }
  // ListStudent:IStudent[]=[];
  @Output() Addstudents = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addStudent(){
    // this.ListStudent.push({...this.student});
    this.Addstudents.emit(this.student);
    this.refesh();
  }
  refesh(){
    this.student.FirstName="";
    this.student.LastName="";
    this.student.Age=0;
    this.student.City="";
    this.student.date="";
  }
}
