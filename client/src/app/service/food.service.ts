import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  url = "http://localhost:3000/api/food/";
  
  constructor(private http:HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }
  saveProduct(product: product): Observable<any> {
    return this.http.post(this.url, product);

  }
  deleteProduct(id: string): Observable<any> {
    return this.http.delete(this.url + id);

  }
  updateProduct(id: string, product: product): Observable<any> {
    return this.http.put(this.url + id, product);
  }
  getProduct(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
