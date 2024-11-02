import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from "../../interfaces/Product";
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cart: Product[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  BASE_URL: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/products/${id}`);
  }

  getProducts(sortKey?: string, sortType?: string, categories?: string[]): Observable<Product[]> {
    const body: Record<string, any> = {};
  
    if (sortKey) {
      body['sort'] = { key: sortKey, type: sortType };
    }
    if (categories && categories.length > 0) {
      body['categories'] = categories;
    }
  
    return this.http.post<Product[]>(`${this.BASE_URL}/products`, body);
  }

  cartCount$ = this.cartCount.asObservable();

  addToCart(product: Product) {
    this.cart.push(product);
    this.cartCount.next(this.cart.length);
  }

  getCartProducts(): Product[] {
    return this.cart;
  }
}
