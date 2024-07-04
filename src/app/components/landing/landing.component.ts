import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faStackOverflow,
  faSearchengin
} from '@fortawesome/free-brands-svg-icons'

import {
  faSearch,
  faUser,
  faCartShopping,
  faBars,
  faTimes,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import { ApiService } from '../../service/api/api.service';
import { SearchService } from 'src/app/service/util/search-service.service';
import { ProductInterface, ProductInterfaceLoad } from 'src/assets/interface/card.interface';
import { LoaderService } from '../../service/util/loader.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {

  faStackOverflow = faStackOverflow;
  faSearchengin = faSearchengin;
  faSearch = faSearch;
  faUser = faUser;
  faCartShopping = faCartShopping;
  faBars = faBars;
  faTimes = faTimes;
  faAngleDown = faAngleDown;

  searchText = '';

  private products: ProductInterfaceLoad[] = [] as ProductInterfaceLoad[];

  private searchTextSuscription: Subscription | undefined;

  constructor(
    private api: ApiService,
    private loader: LoaderService,
    private router: Router,
    private _searchService: SearchService) { }

  ngOnInit(): void {
    this.getProductStore();
  }

  ngOnDestroy(): void {
    this.searchTextSuscription?.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.searchTextSuscription = this._searchService.searchTextEvent.subscribe(() => this.onSearchText());
  }

  public get getProducts(): ProductInterfaceLoad[] {
    return this.products;
  }

  public async searchEvent($event: any) {
    if (this.searchText && this.searchText.length > 0) {
      $event.preventDefault();
      this.router.navigate(['/result-search', this.searchText]);
    } else {
      console.warn('Campo vacío');
    }
  }

  private onSearchText() {
    this.searchText = this._searchService.getSearchText()
    this.searchEvent(event);
  }

  private async getProductStore() {
    this.loader.setLoading(true);
    this.api.getProductsStore().subscribe((data) => {
      console.log(data);
      this.products = data;
      this.loader.setLoading(false);
    });
  }

}
