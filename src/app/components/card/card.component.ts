import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import {
  faHeart as faHeartStuffed
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart
} from '@fortawesome/free-regular-svg-icons';
import { ProductInterface, ProductInterfaceLoad } from 'src/assets/interface/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  faHeart = faHeart;
  faHeartStuffed = faHeartStuffed;
  stuffed: boolean = false;
  img: string = '';
  @Input() product = {} as ProductInterfaceLoad;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  public handleCardGoDetail(): void {
    this._router.navigate(['/detail-product', this.product.id]);
  }

  public getPriceHigher() {
    return this.product.price[1].price;
  }

  public isHigherPrice() {
    return this.product.price.length > 0 && this.product.price[1];
  }

  public getImage(): string {
    if (this.product.images && this.product.images.length > 0) {
      return this.product.images[0].url
    }
    return 'https://cdn3.alegra.com/12b9131658a12ac947ea038544cc3d5712bf0366-1719975905-base-engol.png?Expires=1720580970&Signature=TbZxN8mOhVYou8b~7VpAxCLy7mhxFZBct4IqysoxH~ll7ei2tdjc~KJlfuzSFYG6WkjQZDjbqF8qgVOa2A7VXfPqGxsdMRKRRYJzIlNePRZEUPsexWGDv9y-BHDY6e5SzF-jGmsUZzxeME3UUmM0gnMdtdZIOqlDMOPr-Ta9qjorBCKDlB40SQUg1gpnHfoX8lJJ7sGPvXI-Ig3fcKiGqrsqlEUTEwc5MoNGaZX1T6oVrwy~P1L40oLIC9cA8RYNlTgnPyP119YVFMbRv0WGNYGsTauIc~VKUc8MZIrkKfDOFjuPpa5C5tOy5dsD6O0zBtHSL7Lw4rvAAe4pz23QhQ__&Key-Pair-Id=APKAJU3VE62QBWZP27QQ';
  }

}
