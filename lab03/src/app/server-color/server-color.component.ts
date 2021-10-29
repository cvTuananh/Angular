import { Component, OnInit } from '@angular/core';
import { Iserver } from '../until/server';

@Component({
  selector: 'app-server-color',
  templateUrl: './server-color.component.html',
  styleUrls: ['./server-color.component.css']
})
export class ServerColorComponent implements OnInit {
  sever: Iserver ={
      name:"",
      content:"",
      type:""
  }
  listServer:Iserver[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  addArray(type:string="server"){
    this.sever.type=type;
    this.listServer.push({...this.sever});
  }

}
