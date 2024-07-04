import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultSearchPage } from './pages/result-search.page/result-search.page';
import { LandingPage } from '../app/pages/landing-page/landing-page';
import { ProductDetailPage } from './pages/product-detail.page/product-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'result-search/:text-search',
    component: ResultSearchPage
  },
  {
    path: 'detail-product/:id',
    component: ProductDetailPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
