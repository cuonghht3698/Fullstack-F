import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient) { }

  GetApi()
  {
    return this.http.get('https://localhost:44356/api/products');
  }
  
}
