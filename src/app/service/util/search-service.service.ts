import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  @Output()
  searchTextEvent = new EventEmitter();
  private searchText: string = '';

  constructor() {
    this.searchText = '';
    this.searchTextEvent = new EventEmitter();
  }

  public getSearchText() {
    return this.searchText;
  }

  public setSearchText(update: string) {
    console.log(update, 'search text');
    this.searchText = update;
    this.searchTextEvent.emit(update);
  }

}
