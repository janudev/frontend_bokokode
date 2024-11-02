import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../products/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.cartCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }
}