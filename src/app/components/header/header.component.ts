import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { SearchService } from 'src/app/service/util/search-service.service';

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

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faStackOverflow = faStackOverflow;
  faSearchengin = faSearchengin;
  faSearch = faSearch;
  faUser = faUser;
  faCartShopping = faCartShopping;
  faBars = faBars;
  faTimes = faTimes;
  faAngleDown = faAngleDown;

  public searchText: string = '';

  constructor(private _searchService: SearchService) {}

  ngOnInit(): void { }

  public eventSearchText($event: Event): void {
    if (this.searchText && this.searchText.length > 0) {
      this._searchService.setSearchText(this.searchText);
    } else {
      // [TODO]: Agregar toast service
      console.warn('Campo vació');
    }
  }

}
