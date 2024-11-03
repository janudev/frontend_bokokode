import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../interfaces/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-dropdown.component.html',
  styles: ``
})
export class CardDropdownComponent {
  @Input() cartProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.cartProducts = this.productService.getCartProducts();
  }

  clearCart() {
    this.productService.clearCart();
    this.cartProducts = [];
  }
}
