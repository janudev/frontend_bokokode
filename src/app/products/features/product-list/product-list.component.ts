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

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;

        this.featuredProd = this.products.find(product => product.featured === true)
        this.products = this.products.filter(product => product.featured !== true)

        console.log("Productos recibidos:", products);
        console.log("Producto destacado:", this.featuredProd);
      },
      (err) => console.error("Error al obtener los productos:", err)
    );
  }
}
