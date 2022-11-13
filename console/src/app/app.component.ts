import {Component} from '@angular/core';
import { NoteSource } from './model/noteSource.model';
import { PostBody } from './model/postBody.model';
import { GetBody } from './model/getBody.model';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']})

export class AppComponent {
  private getBody=new GetBody("https://google.com/1234");
  private postBody= new PostBody("https://google.com/1234","This is a test note body from angular")
  constructor(private noteSource:NoteSource){

  }
  getNote(){
    this.noteSource.getNote(this.getBody).subscribe((res)=>{
      console.log("this is response from getNote");
     // console.log(res)
    })
  }
  postNote(){
    this.noteSource.postNote(this.postBody).subscribe((res)=>{
      console.log("this is response from postNote");
      console.log(res)
    })

  }
    textAreaContent:string='';
    logContent(){
      console.log("Content :"+this.textAreaContent);
    }
}
