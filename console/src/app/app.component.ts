///<reference types="chrome"/>
import { Component, HostListener} from '@angular/core';
import { GetBody,PostBody, NoteSource } from './model';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']})

export class AppComponent {
  textAreaContent:string='';
  current_url='';  
  constructor(private noteSource:NoteSource){
    parent.postMessage("to parent","*")

  }
  @HostListener("window:message",["$event"])
  onMessage(event: any){
    this.current_url=event.origin;
  
  }
  getNote(){
    let getBody=new GetBody(`${this.current_url}`)
    this.noteSource.getNote(getBody).subscribe((res)=>{      
      console.log("GET Response")
      console.log(res)
    })
  }
  postNote(){
      let postBody= new PostBody(`${this.current_url}`,`${this.textAreaContent}`)   
      this.noteSource.postNote(postBody).subscribe((res)=>{      
        console.log("POST Response")
        console.log(res)
    })

  }
}
