import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent {

}
