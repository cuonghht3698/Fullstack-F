import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAPI';
  data={
    name:'',
    price:0,
    color:''
    
  }
  hide=true;
  constructor ( private http:HttpClient){}
  sentData(){
    let url="https://localhost:44356/api/products";
   return this.http.post(url,{
     data:JSON.stringify(this.data),

   }).toPromise().then((data:any)=>{
     console.log(data);
     
   });
    

  }
}
