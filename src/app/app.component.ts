import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Component,Input,Output,ViewChild } from '@angular/core';
import { GetApiService } from './get-api.service';
import { observable } from 'rxjs';
import { ApiComponent } from './api/api.component';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAPI';
  data = {
   
    name: '',
    price: 0,
    color: ''

  }
  id='';
  SetData(item)
  {
    this.id=item.id;
    this.data.name=item.name;
    this.data.price=item.price;
    this.data.color=item.color;
    // console.log(item);
    
  }

  Update(){
    let url = "https://localhost:44356/api/products/";
    this.http.put(url+this.id,this.data).subscribe(res => {
      this.api.GetApi().subscribe((data) => {
       this.ApiComponent.GetData();
       this.Toastr.success("Thêm thành công","Success",{
         timeOut:2000,
       });
      }, error => {
        console.log(error);
       
      })
      




    }, error => {

    })
  }
  @ViewChild('ReLoadData') ApiComponent: ApiComponent;
  hide = true;
  constructor(private http: HttpClient, private api: GetApiService,private Toastr:ToastrService) { }
  sentData() {
    let url = "https://localhost:44356/api/products";
    this.http.post(url, this.data).subscribe(res => {
      this.api.GetApi().subscribe((data) => {
       this.ApiComponent.GetData();
       this.Toastr.success("Thêm thành công","Success",{
         timeOut:2000,
       });
      }, error => {
        console.log(error);
       
      })
      




    }, error => {

    })
  }
}