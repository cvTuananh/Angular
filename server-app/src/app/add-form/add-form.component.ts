import { Component,EventEmitter, Output, OnInit,Input } from '@angular/core';
import { Iserver } from '../until/serverObj';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
 
  sver: Iserver = {
    serverName: "",
    content: '',
    Type: '',
    ping: 0
  }
  @Output() addEvent = new EventEmitter();
    
  
  Listserver: Iserver[] =[]


  
  constructor() { }

  ngOnInit(): void {
  }
    addArray(type: string="Server") {
        this.sver.Type = type;
        this.addEvent.emit(this.sver);
    }
   
}
