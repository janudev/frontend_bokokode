import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { CommonModule } from '@angular/common';
import { ProductSmallCardComponent } from '../product-small-card/product-small-card.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-featured-product-card',
  standalone: true,
  imports: [CommonModule, ProductSmallCardComponent],
  templateUrl: './featured-product-card.component.html',
  styles: ``
})
export class FeaturedProductCardComponent {
  @Input() featuredProd!: Product | undefined;

  constructor(private productService: ProductService) {}

  onAddToCart() {
    if (this.featuredProd) {
      this.productService.addToCart(this.featuredProd);
    }
  }
}
