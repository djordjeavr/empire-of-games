import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { BasketComponent } from './components/basket/basket.component';
import { GamesComponent } from './components/games/games.component';
import { SoftwareComponent } from './components/software/software.component';
import { CardGiftComponent } from './components/card-gift/card-gift.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddFeaturesComponent } from './components/add-features/add-features.component';
import { UpdateProductsComponent } from './components/update-products/update-products.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BasketComponent,
    GamesComponent,
    SoftwareComponent,
    CardGiftComponent,
    AdminComponent,
    LoginComponent,
    RegistrationComponent,
    ProductItemComponent,
    PaymentMethodsComponent,
    ProfileComponent,
    UpdateProfileComponent,
    AllUsersComponent,
    AllCommentsComponent,
    AllProductsComponent,
    AddProductComponent,
    AddFeaturesComponent,
    UpdateProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}