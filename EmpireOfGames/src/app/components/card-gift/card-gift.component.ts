import { Component, OnInit } from '@angular/core';
import { Platform } from '../Platforms.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Product } from '../home/Product.class';
import { CommonService } from 'src/app/services/CommonService';
import { SearchProduct } from '../games/SearchProduct.class';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-card-gift',
  templateUrl: './card-gift.component.html',
  styleUrls: ['./card-gift.component.scss']
})
export class CardGiftComponent implements OnInit {
  
   platforms:Platform[]=[];
   giftCards:Product[]=[];
   numberOfProducts:number;
   checkedPlatformIDs=[];
   searchProducts:SearchProduct=new SearchProduct();
  constructor(private restApi:RestApiService, public commonService:CommonService,
    public translate:TranslateService) { }

  ngOnInit(): void {
    this.commonService.allProducts=[];
   this.getAllPlatforms();
   this.getTotalNumberOfGiftCards();
   this.getAllGiftCards();
  }

 
getAllPlatforms(){
  this.restApi.getAllPlatforms()
  .subscribe((response:Platform[])=>{
    this.platforms=response;
  })
}
getAllGiftCards(){
  this.restApi.getAllGiftCards()
  .subscribe((response:Product[])=>{
    this.commonService.allProducts=response;
  })
}
getTotalNumberOfGiftCards(){
  this.restApi.getTotalNumberOfGiftCards()
  .subscribe(response=>{
    this.numberOfProducts=response[0]. numberOfGiftCards;
    
  })
}
changeSelecttionPlatform(){
  this.fetchCheckedPlatformIDs();
 
  this.searchProducts.platformIds=this.checkedPlatformIDs.toString();
 this.restApi.searchForGiftCards(this.searchProducts)
 .subscribe((response:Product[])=>{
   console.log(response);
   
   this.commonService.allProducts=response;
  
   
 })
  
}
fetchCheckedPlatformIDs() {
  this.checkedPlatformIDs=[]
  this.platforms.forEach(value => {
    if(value.isChecked){
      this.checkedPlatformIDs.push(value.id);
      
    }
  });
}
searchAllProducts(){
  
  this.restApi.searchForGiftCards(this.searchProducts)
  .subscribe((response:Product[])=>{
    this.commonService.allProducts=response;
    console.log(this.commonService.allProducts);
    
  })
 }
}
