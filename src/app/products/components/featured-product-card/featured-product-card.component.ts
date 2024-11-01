import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-product-card.component.html',
  styles: ``
})
export class FeaturedProductCardComponent {
  @Input() featuredProd!: Product;
}
