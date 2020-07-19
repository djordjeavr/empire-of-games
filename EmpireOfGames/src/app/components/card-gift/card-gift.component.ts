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
  collapsed= { 
    area_hidden:false,
    area_hidden1:false
   }
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

  isCollapsed(event){
    const index=event.target.getAttribute('index');
    if(index==1){
      if(!this.collapsed.area_hidden){
        this.collapsed.area_hidden=true;
      }
      else
   this.collapsed.area_hidden=false;
    }
    if(index==2){
      if(!this.collapsed.area_hidden1){
        this.collapsed.area_hidden1=true;
      }
      else
      this.collapsed.area_hidden1=false;
    } 
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
