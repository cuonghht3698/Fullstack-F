import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { GetApiService } from '../get-api.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private api:GetApiService,private http:HttpClient) { }
   data:object;
  ngOnInit(): void {
   this.GetData();
  }
  GetData(){
    this.api.GetApi().subscribe((data)=>{
      this.data=data;
    })
  }

  Delete(id){
    let url = "https://localhost:44356/api/products/";
    this.http.delete(url+id).subscribe(res => {
      this.api.GetApi().subscribe((data) => {
       this.data=data;
      }, error => {
        console.log(error);
      });
    })
  }
}
