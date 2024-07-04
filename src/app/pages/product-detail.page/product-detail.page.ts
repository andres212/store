import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';
import { LoaderService } from 'src/app/service/util/loader.service';
import { ProductInterface } from 'src/assets/interface/rest.interface';

@Component({
  selector: 'app-product-detail.page',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss']
})
export class ProductDetailPage implements OnInit {

  private textIdByParam: string = '';
  public loading: boolean = false;
  private product = {} as ProductInterface;

  constructor(
    private _activedRouter: ActivatedRoute,
    private _apiService: ApiService,
    private _loader: LoaderService
  ) { }

  ngOnInit(): void {
    this.initPageDetail();
  }

  public get getProduct(): ProductInterface {
    return this.product;
  }

  public setProduct(_product: ProductInterface) {
    this.product = _product;
  }

  private async initPageDetail() {
    try {
      this._loader.setLoading(true);
      this.loading = true;
      this.textIdByParam = this._activedRouter.snapshot.paramMap.get('id') || ''
      console.log(this.textIdByParam);
      if (this.textIdByParam) {
        const responseSearchById = await this._apiService.getProductById(this.textIdByParam);
        responseSearchById.subscribe((data) => {
          console.log(data)
          if (data && data?.id) {
            this.setProduct(data);
            this.loading = false;
          }
        }, (error) => {
          console.warn(error, 'Error');
        })
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        this._loader.setLoading(false);
        this.loading = false;
      }, 1500);
    }
  }

}
