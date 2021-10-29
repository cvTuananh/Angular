import { Component, OnInit } from '@angular/core';
import { IStudent } from '../until/student';

@Component({
  selector: 'app-display-student',
  templateUrl:'./display-student.component.html',
  styleUrls: ['./display-student.component.scss']
})
export class DisplayStudentComponent implements OnInit {
  ListStudent:IStudent[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  AddStudents(value:IStudent){
    this.ListStudent.push({...value});
  }

}
