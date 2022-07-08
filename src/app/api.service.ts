import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private https:HttpClient) { }
  viewGallery=()=>{
    return this.https.get("http://jsonplaceholder.typicode.com/photos")
  }
}
