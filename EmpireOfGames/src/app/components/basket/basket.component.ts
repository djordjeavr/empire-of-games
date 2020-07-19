import { Component, OnInit } from '@angular/core';
import { Basket } from '../product-item/Basket.class';
import { RestApiService } from 'src/app/services/rest-api.service';

import { UserService } from 'src/app/services/UserService.service';
import { __param } from 'tslib';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/CommonService';
import { TranslateService } from '@ngx-translate/core';
import { discountCode } from './DiscountCode.class';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
basket:Basket=new Basket();
products:Basket[]=[];
items:number;
codes=[];
totalPrice:number=0;
isClicked:boolean=false;
discountCode:discountCode=new discountCode();


  constructor(private restApi:RestApiService,private userService:UserService,
   private commonService:CommonService ,private toastr:ToastrService,
   public translate:TranslateService) { }

  ngOnInit(): void {
    this.getAllProductFromBasket();
    this.getTotalNumberProducts();
    this.discountCode=new discountCode();

    
  
  }


  getAllProductFromBasket(){
    this.basket.user_id=this.userService.loggedUser.id;
    this.restApi.getAllProductFromBasket(this.basket.user_id)
    .subscribe((response:Basket[])=>{
     this.products=response;
     console.log(response);
     this.calculateTotalPrice();
     
    
    })
    
  }
  increaseCounter(product){

    product.item++;
    product.sold++;
    product.totalPrice=product.price*product.item;  //Increase total price
    this.updateProductsInBasket(product);
    this.commonService.updateSoldProduct(product);
    this.totalPrice=this.totalPrice+product.price;
  
  
  }
  decreaseCounter(product){
    product.item--;
    product.sold--;
    console.log(product.sold);
    
    product.totalPrice=product.price*product.item;  //Decrease total price
    this.updateProductsInBasket(product);
    this.commonService.updateSoldProduct(product);
    this.totalPrice=this.totalPrice-product.price;
   
    
  }
  getTotalNumberProducts(){
    this.basket.user_id=this.userService.loggedUser.id;
    this.restApi.getTotalNumberOfProductsInBasket(this.basket.user_id)
    .subscribe(response=>{
    this.items=response[0].totalNumberOfProductsInBasket;
     console.log(response);
    
    })
  }

  updateProductsInBasket(product){
    this.basket.user_id=this.userService.loggedUser.id;
    this.basket.id=product.id;
    this.basket.item=product.item;                      // Entering item , total price and product sold in the database
    this.basket.totalPrice=product.totalPrice;
    this.restApi.updateProductsInBasket(this.basket)
    .subscribe((response:Basket)=>{
     console.log(response);
    
    })
  }
  deleteProductsInBasket(product){
    product.sold--
   this.restApi.deleteProductsinBasket(product)
   .subscribe((response)=>{
    this.toastr.success(response['message'])
    
   })
   this.getAllProductFromBasket();
   this.getTotalNumberProducts();
  
   
   this.commonService.updateSoldProduct(product);
   
  }
calculateTotalPrice(){
  
  for (let i = 0; i < this.products.length; i++) {
 const param=this.products[i].totalPrice;
 console.log(param);
 this.totalPrice=param+this.totalPrice;
  }
  console.log(this.totalPrice); 
}
continueToPayment(){
 if(this.isClicked==false){
   this.isClicked=true
 }
 else{
   this.isClicked=false;
 }
 
}

}
