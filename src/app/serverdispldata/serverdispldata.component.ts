import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-serverdispldata',
  templateUrl: './serverdispldata.component.html',
  styleUrls: ['./serverdispldata.component.css']
})
export class ServerdispldataComponent implements OnInit {
 @Input() element  :{type:string,name:string,content:string} ;
  constructor() { }

  ngOnInit() {
  }

}
