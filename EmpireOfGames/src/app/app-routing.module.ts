import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { SoftwareComponent } from './components/software/software.component';
import { CardGiftComponent } from './components/card-gift/card-gift.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { BasketComponent } from './components/basket/basket.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'gaming', component:GamesComponent},
  {path:'software', component:SoftwareComponent},
  {path:'gift-cards', component:CardGiftComponent},
  {path:'admin', component:AdminComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'sign-up', component:RegistrationComponent},
  {path:'product-item', component:ProductItemComponent},
  {path:'basket',component:BasketComponent},
  {path:'profile',component:ProfileComponent},
  { path: '**',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
