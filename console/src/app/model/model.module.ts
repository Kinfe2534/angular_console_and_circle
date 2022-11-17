import { NgModule } from "@angular/core";
import { NoteSource, GET_URL,POST_URL } from "../service/noteSource.model";


@NgModule({
providers:[NoteSource,{ provide: GET_URL, useValue: `https://dev-simplrsolutions.azurewebsites.net/api/common/getNote` },{ provide: POST_URL, useValue: `https://dev-simplrsolutions.azurewebsites.net/api/common/postNote` }],
})
   
 export class ModelModule {

}