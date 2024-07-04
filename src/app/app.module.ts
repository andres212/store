import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// SERVICES

import { SearchService } from '../app/service/util/search-service.service';
import { ToastService } from './service/util/toast.service';

// COMPONENTS

import { LandingComponent } from './components/landing/landing.component';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component'
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastComponent } from './components/toast/toast.component';

// PAGES

import { LandingPage } from './pages/landing-page/landing-page';
import { ResultSearchPage } from './pages/result-search.page/result-search.page';
import { ProductDetailPage } from './pages/product-detail.page/product-detail.page';

// ROUTING

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultSearchPage,
    LandingPage,
    ProductDetailPage,
    LandingComponent,
    CardComponent,
    SpinnerComponent,
    ResultSearchComponent,
    HeaderComponent,
    FooterComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    SearchService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
