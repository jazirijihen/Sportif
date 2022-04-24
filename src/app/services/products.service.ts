import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    constructor(private http : HttpClient) { }

    getProducts () : Observable<Product[]> {
        return this.http.get<Product[]>(`${environment.API_URL}/api/products`);
    }

    getProduct (id : string) : Observable<Product> {
        return this.http.get<Product>(`${environment.API_URL}/api/products/${id}`);
    }
    createProduct(product: Product):Observable<object>{
        return this.http.post(`${environment.API_URL}/api/products`,product);
      }
      getProductById(id: number): Observable<Product>{
        return this.http.get<Product>(`${environment.API_URL}/api/products/${id}`);
      }
      
      updateProduct(id: number, product: Product): Observable<Object>{
        return this.http.put(`${environment.API_URL}/api/products/${id}`,product);
      }
      deleteProduct(id: number): Observable<Object>{
        return this.http.delete(`${environment.API_URL}/api/products/${id}`);
      }
}
