import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empty } from '../interface/interface.zoomer';
@Injectable({
  providedIn: 'root'
})
export class DataService {
   
  zoomerURL: string = "https://zoommer-clone-ee44dea926d6.herokuapp.com/product"
  zoomerURL1: string = "https://zoommer-clone-ee44dea926d6.herokuapp.com/product?categoryName=%E1%83%A2%E1%83%90%E1%83%91%E1%83%94%E1%83%91%E1%83%98"
   
  constructor(private http:HttpClient) { }

  getZummer(){
    return this.http.get<Empty>(this.zoomerURL)
  }
  getZummer1(){
    return this.http.get<Empty>(this.zoomerURL1)
  }
}
