import { Component, OnInit } from '@angular/core';
import { Iserver } from '../until/serverObj';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {

  listServer:Iserver[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  addArray(value:Iserver){
    this.listServer.push({...value});
  }

}
