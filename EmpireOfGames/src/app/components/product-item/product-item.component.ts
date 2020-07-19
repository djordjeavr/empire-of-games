import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/CommonService';
import { Product } from '../home/Product.class';
import { DomSanitizer } from '@angular/platform-browser';
import { RestApiService } from 'src/app/services/rest-api.service';
import { UserService } from 'src/app/services/UserService.service';
import { Commentary } from './Commentary.class';
import { Basket } from './Basket.class';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
 product:Product=new Product();
 commentaries:Commentary[]=[];
 isHiddenArea:boolean=true;
comment:Commentary=new Commentary();
basket:Basket=new Basket();
 
  constructor(public commonService:CommonService,public sanitizer: DomSanitizer,
    private restApi:RestApiService,public userService:UserService,
    private router:Router,public translate:TranslateService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllCommentaries();
  }
  
  getAllCommentaries(){
    this.product=this.commonService.product;
    this.restApi.getAllCommentaries(this.product.id)
    .subscribe((response:Commentary[])=>{
    this.commentaries=response;
   
   
  })
}

showTheArea(){
  if(this.isHiddenArea){
    this.isHiddenArea=false;
  }
}
hideTheArea(){
  if(!this.isHiddenArea){
    this.isHiddenArea=true;
  } 
}
saveComment(){
  this.comment.product_id=this.commonService.product.id;
  this.comment.user_id=this.userService.loggedUser.id;
  this.restApi.insertComment(this.comment)
  .subscribe(response=>{
   console.log(response);
   this.getAllCommentaries();
})
}
insertInBasket(){
   
  this.product.sold++
 
  this.basket.totalPrice=this.commonService.product.price;
 this.basket.product_id=this.commonService.product.id;
 this.basket.user_id=this.userService.loggedUser.id;
 this.restApi.insertInBasket(this.basket,this.product.sold)
 .subscribe(response=>{
   this.toastr.success(this.translate.instant('InsertInBasket'))
   this.router.navigateByUrl('basket');
 })
}
 

  
}
