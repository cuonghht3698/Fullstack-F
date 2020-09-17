import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private api:GetApiService) { }
  data:object;
  ngOnInit(): void {
    this.api.GetApi().subscribe((data)=>{
      this.data=data;
    })
  }
 
}
