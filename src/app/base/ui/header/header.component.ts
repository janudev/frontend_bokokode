import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../products/services/product.service';
import { CommonModule } from '@angular/common';
import { CardDropdownComponent } from '../../../products/components/card-dropdown/card-dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, CardDropdownComponent],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  isCartDropdownVisible: boolean = false;

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.productService.cartCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }

  toggleCartDropdown() {
    this.isCartDropdownVisible = !this.isCartDropdownVisible;
  }

  handleDropdownVisibilityChange(visible: boolean) {
    this.isCartDropdownVisible = visible;
  }
}