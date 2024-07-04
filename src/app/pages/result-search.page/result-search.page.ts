import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../service/api/api.service';
import { LoaderService } from '../../service/util/loader.service'
import { responseBaseRowProducts } from 'src/assets/interface/rest.interface';
import { SearchService } from 'src/app/service/util/search-service.service';
import { SearchStatus } from './search.config'
import { ProductInterfaceLoad } from 'src/assets/interface/card.interface';
/**
 * Pagina de enrutado para la busqueda de usuario
 */
@Component({
  selector: 'app-result-search.page',
  templateUrl: './result-search.page.html',
  styleUrls: ['./result-search.page.scss']
})
export class ResultSearchPage implements OnInit {

  private textSearchByParam: string = '';
  public productsFinds =  [] as ProductInterfaceLoad[];
  public loading: boolean = false;

  constructor(
    private api: ApiService,
    private loader: LoaderService,
    private router: Router,
    private _activedRoute: ActivatedRoute,
    private _searchService: SearchService) { }

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.textSearchByParam = this._activedRoute.snapshot.paramMap.get(SearchStatus.TEXT_SEARCH) || ''
    this._searchService.searchTextEvent.subscribe(
      (text) => {
        this.textSearchByParam = this._searchService.getSearchText()
        this.loaderSearchText();
      }
    );
    if (this.textSearchByParam) {
      this.loaderSearchText();
    } else {
      console.warn('Error en busqueda')
      this.router.navigateByUrl('**');
    }
  }

  private loaderSearchText(): void {
    try {
      this.loader.setLoading(true);
      this.loading = true;
      const response = this.api.getSearchByUser(this.textSearchByParam);
      response.subscribe((data) => {
        console.log(data)
        if (data) {
          this.productsFinds = data;
          this.loading = false;
        }
      }, (error) => {
        console.warn(error, 'Error');
      })
    } catch (error) {
      console.warn(error, 'Error');
    } finally {
      setTimeout(() => {
        this.loader.setLoading(false);
        this.loading = false;
      }, 1000);
    }
  }

}
