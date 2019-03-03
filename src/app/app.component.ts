import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 serverElements   = [{type:"test",name:"kranthi",content:"ccheck data"}] 

 addDetail (serverData : { types : string , name : string ,contents : string}){
   console.log( "aadadaaaaaaa")
   this.serverElements.push(
     {
      type :serverData.types,
      name: serverData.name,
      content: serverData.contents
     } 
   )
 }


}
