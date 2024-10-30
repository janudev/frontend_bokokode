import { Component, inject } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './product-list.component.html',
  styles: ``,
})
export default class ProductListComponent {}
