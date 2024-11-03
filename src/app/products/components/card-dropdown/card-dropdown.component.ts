import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() dropdownVisibilityChange = new EventEmitter<boolean>();

  constructor(private productService: ProductService) {
    this.cartProducts = this.productService.getCartProducts();
  }

  clearCartAndClose() {
    this.productService.clearCart();
    this.cartProducts = [];
    this.closeDropdown();
  }

  closeDropdown() {
    this.dropdownVisibilityChange.emit(false);
  }

  showDropdown() {
    this.dropdownVisibilityChange.emit(true);
  }
}
