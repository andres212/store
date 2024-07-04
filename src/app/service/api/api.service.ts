import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NAME_FIELD, ROOT_URL, TOKEN, SEARCH_FIELD_BY_NAME, SEARCH_BY_ID, SEARCH_FIELD_BY_PRICE, SEARCH_FIELD_BY_QUERY } from 'src/assets/utils';
import { responseBaseRowProducts, ProductInterface } from 'src/assets/interface/rest.interface';
import { Observable } from 'rxjs';
import { IntegrationStatus } from '../../../assets/config/request.config';
import { ProductInterfaceLoad } from 'src/assets/interface/card.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  /**
   *
   * @returns Productos paginados por 30
   */
  public getProductsStore(): Observable<any> {
    return this.genericConsumeRest(NAME_FIELD, IntegrationStatus.GET);
  }

  /**
   *
   * @param textSearch Texto de busqueda dado por el usuario
   * @returns productos buscados
   */

  public getSearchByUser(textSearch: string): Observable<ProductInterfaceLoad[]> {
    let type = (this.isNumber(textSearch) ? SEARCH_FIELD_BY_PRICE : SEARCH_FIELD_BY_QUERY) + textSearch
    return this.genericConsumeRest(NAME_FIELD + type, IntegrationStatus.GET);
  }

  /**
   *
   * @param id from product
   * @returns detail of product
   */

  public getProductById(id: string): Observable<ProductInterface> {
    return this.genericConsumeRest('/'+ id +SEARCH_BY_ID, IntegrationStatus.GET)
  }

  /**
   * Busqueda generica
   * @param URL completa sobre la que se envía la solicitud
   * @param type de solicitud sobre la cual se envía
   * @param payLoad
   * @returns
   */
  private genericConsumeRest(URL:string, type: string, payLoad?: {}): Observable<any> {
    const HEADER = new HttpHeaders().set(IntegrationStatus.AUTHORIZATION, TOKEN);
    const ENDPOINT = ROOT_URL + URL;

    return this.httpClient.request(type, ENDPOINT, {headers: HEADER, body: payLoad});
  }

  /**
   *
   * @param data parametro a evaluar
   * @returns si es numero o no
   */
  private isNumber(data: string): boolean {
    return /^[0-9]*$/.test(data);
  }

}

