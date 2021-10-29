import { Component, OnInit } from '@angular/core';
import { Iblog } from '../until/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog:Iblog[]=[
    {id:15 , name: 'Blog 1',author:'Tuan Anh',content:'day la noi dung blog 1',description: 'Blog 1 description'},
    {id:16 , name: 'Blog 2',author:'Tuan Anh',content:'day la noi dung blog 2',description: 'Blog 2 description'},
    {id:17 , name: 'Blog 3',author:'Tuan Anh',content:'day la noi dung blog 3',description: 'Blog 3 description'},
    {id:18 , name: 'Blog 4',author:'Tuan Anh',content:'day la noi dung blog 4',description: 'Blog 4 description'},
    {id:19 , name: 'Blog 5',author:'Tuan Anh',content:'day la noi dung blog 5',description: 'Blog 5 description'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
