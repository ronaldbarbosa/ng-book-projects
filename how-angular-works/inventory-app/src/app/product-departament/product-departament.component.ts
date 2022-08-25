import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'product-departament',
  templateUrl: './product-departament.component.html',
  styleUrls: ['./product-departament.component.css']
})
export class ProductDepartamentComponent {
  @Input() product!: Product;
}