import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'products-row',
  templateUrl: './products-row.component.html',
  styleUrls: ['./products-row.component.css']
})
export class ProductsRowComponent  {
  @Input() product!: Product;

  @HostBinding('attr.class') cssClass = 'item';
}