import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../interfaces/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCheckboxModule, CommonModule],
  templateUrl: './product-list.component.html',
  styles: ``,
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  featuredProd: Product | undefined;
  isAsc: boolean = true;
  selectedCategories: string[] = [];
  categories: string[] = ['People', 'Premium', 'Pets', 'Food', 'Landmarks', 'Cities', 'Nature'];
  sortKey: string = 'price';
  sortType: string = 'ASC';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts(this.sortKey, this.selectedCategories);
  }  

  getProducts(sortKey: string = this.sortKey, categories: string[] = this.selectedCategories): void {
    this.productService.getProducts(sortKey, this.sortType, categories).subscribe(
      (products) => {
        if (!this.featuredProd) {
          this.featuredProd = products.find(product => product.featured === true);
        }
        
        this.products = products.filter(product => product.featured !== true);
  
        if (categories.length > 0) {
          this.products = this.products.filter(product => categories.includes(product.category));
        }
      },
      (err) => console.error("Error al obtener los productos:", err)
    );
  }  
  
  toggleSortByPrice(): void {
    this.isAsc = !this.isAsc;
    this.sortType = this.isAsc ? 'ASC' : 'DESC';
    this.getProducts(this.sortKey); 
  }

  toggleCategory(category: string): void {
    const index = this.selectedCategories.indexOf(category);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(category);
    }
    this.getProducts(this.sortKey, this.selectedCategories); 
  }
}
