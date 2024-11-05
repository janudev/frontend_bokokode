import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../interfaces/Product';
import { CommonModule } from '@angular/common';
import { FeaturedProductCardComponent } from "../../components/featured-product-card/featured-product-card.component";
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatCheckboxModule,
    CommonModule,
    FeaturedProductCardComponent,
    ProductCardComponent,
  ],
  templateUrl: './product-list.component.html',
  styles: ``,
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  featuredProd: Product | undefined;
  isDropdownOpen = false;

  // Filtrado
  isAsc: boolean = true;
  selectedCategories: string[] = [];
  categories: string[] = ['People', 'Premium', 'Pets', 'Food', 'Landmarks', 'Cities', 'Nature'];
  sortKey: string = 'price';
  sortType: string = 'ASC';
  
  // Paginación
  currentPage: number = 1;
  pageSize: number = 6;
  totalProducts: number = 0;
  totalPages: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts(this.sortKey, this.selectedCategories);
  }

  getProducts(sortKey: string = this.sortKey, categories: string[] = this.selectedCategories): void {
    const page = this.currentPage;
    this.productService.getProducts(sortKey, this.sortType, categories, page, this.pageSize).subscribe(
      ({ products, total }) => {
        
        const featuredProducts = products.filter(product => product.featured === true);

        this.featuredProd = featuredProducts.length > 0 ? featuredProducts[0] : undefined;
        this.products = products.filter(product => product.featured !== true);
        this.totalPages = Math.ceil(total / this.pageSize);
        
      },
      (err) => console.error("Error al obtener los productos:", err)
    );
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getProducts(this.sortKey, this.selectedCategories);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getProducts(this.sortKey, this.selectedCategories);
    }
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
  
  clearCategories(): void {
    this.selectedCategories = [];
    this.getProducts(this.sortKey, this.selectedCategories);
  }
  
  saveSelection(): void {
    this.isDropdownOpen = false; 
  }

  isChecked(category: string): boolean {
    return this.selectedCategories.includes(category);
  }
}