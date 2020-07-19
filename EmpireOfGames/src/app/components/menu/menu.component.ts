import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { CategorySoftware } from './CategorySoftware.class';
import { CategoryGiftCard } from './CategoryGiftCard.class';
import { Product } from '../home/Product.class';
import { SearchProduct } from '../games/SearchProduct.class';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService.service';
import { CommonService } from 'src/app/services/CommonService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  allCategoriesSoftware:CategorySoftware[]=[];
  categoriesGiftCards:CategoryGiftCard[]=[];
 productsSearched:Product[];
 nameProducts:string='';
 isClickedSearch:boolean=false;
  constructor(private restApi:RestApiService, private router:Router,
    public userService:UserService,public commonService:CommonService,public translate: TranslateService) { 
      
    }

  ngOnInit(): void {
   this.getSubcategorySoftware();
   this. getSubcategoryGiftCard();
  }

  getSubcategorySoftware(){
   this.restApi.getAllCategorySoftware()
   .subscribe((response:CategorySoftware[])=>{
     this.allCategoriesSoftware=response;
   })
  }
  getSubcategoryGiftCard(){
    this.restApi.getAllCategoryGiftCards()
    .subscribe((response:CategoryGiftCard[])=>{
      this.categoriesGiftCards=response;
    })
   }

   clickCategoryGiftCard(category1){
    this.restApi.searchSubcategoryGiftCard(category1)
    .subscribe((response:Product[])=>{
      this.commonService.allProducts=response;
      this.router.navigateByUrl('gift-cards');
    })
      
   }
   clickCategorySoftware(category){
   
    this.restApi.searchSubcategorySoftware(category)
    .subscribe((response:Product[])=>{
      this.commonService.allProducts=response;
      this.router.navigateByUrl('software');
  
      
    })
      
   }
   searchAllProducts(){
    this. isClickedSearch=true;
    this.restApi.searchProducts(this.nameProducts)
    .subscribe((response:Product[])=>{
      this. productsSearched=response;
      console.log(this.productsSearched);
      
      
    })
   
   }
   notClickedSearch(){
    this. isClickedSearch=false;
    this.nameProducts='';
   } 
   Login(){
    this.router.navigateByUrl('login');
   }
   logout(){
     localStorage.removeItem('loggedUser');
     this.router.navigateByUrl('login');
   }
   moveToBasket(){
     this.router.navigateByUrl('basket')
   }
   moveToProfile(){
     this.router.navigateByUrl('profile');
   }

}
