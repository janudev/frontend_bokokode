import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-small-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-small-card.component.html',
  styles: ``
})
export class ProductSmallCardComponent {
  @Input() product!: Product;
}
