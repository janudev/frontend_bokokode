import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private productService: ProductService) {}

  onAddToCart() {
    this.productService.addToCart(this.product);
  }
}
