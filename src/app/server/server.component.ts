import { Component,OnInit,EventEmitter,Output} from  '@angular/core';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';


@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  styleUrls: ['./server.component.css'],
})



export class ServerComponent  implements OnInit {
    @Output() addData = new EventEmitter<{ types : string ,name : string ,contents : string }>();
    template :string ;
    serverContent :string ;
    
    ngOnInit(){
        
    }
  
    /*successBtn(event : Event){
      this.template = (<HTMLInputElement>event.target).value; 
    } */

     
    kranthi(){
        console.log("hi krantu...............");
      this.addData.emit({
              types: this.template, name:'kranthi', contents : this.serverContent
           });

    }
    
    




}