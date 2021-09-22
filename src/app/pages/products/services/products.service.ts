import { Injectable } from '@angular/core';
//importamos el modulo http
import { HttpClient } from '@angular/common/http';
//importamos Observable de rxjs
import { Observable } from 'rxjs';
//importamos la interface
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL = 'http://localhost:3000/products';

  constructor(private http:HttpClient) { }


  //metodo obtener todos los productos
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }


}
