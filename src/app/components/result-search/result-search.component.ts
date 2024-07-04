import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInterface, ProductInterfaceLoad } from 'src/assets/interface/card.interface';
import { responseBaseRowProducts } from 'src/assets/interface/rest.interface';

@Component({
  selector: 'app-result-search-component',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {

  @Input() responseProducts: ProductInterfaceLoad[];
  private products = [] as ProductInterfaceLoad[];

  constructor() {}

  ngOnInit(): void {
    this.products = [];
    if (this.responseProducts && this.responseProducts.length > 0) {
      this.products = this.responseProducts;
    }
  }

  public get getProducts() {
    return this.products;
  }
}
