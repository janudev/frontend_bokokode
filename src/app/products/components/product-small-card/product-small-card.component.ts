import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-small-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-small-card.component.html',
  styles: ``
})
export class ProductSmallCardComponent {
  @Input() product!: Product;

  constructor(private productService: ProductService) {}

  onAddToCart() {
    this.productService.addToCart(this.product);
  }
}
