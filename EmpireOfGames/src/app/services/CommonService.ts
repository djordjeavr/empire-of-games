import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { Product } from '../components/home/Product.class';
import { Router } from '@angular/router';

import { UserService } from './UserService.service';




@Injectable({providedIn: 'root'})
export class CommonService {
    product:Product=new Product();
    allProducts:Product[]=[];
    mode:string;
 
 
   
    constructor( private restApi:RestApiService, private router:Router,
     private userService:UserService) { }
    
changeMode(){
  this.mode
}
  

    showProduct(mapId,category){
   this.restApi.getProduct(mapId,category)
   .subscribe((response:Product)=>{
       this.product=response;
       console.log(response);
       
     this.router.navigateByUrl('product-item');
    
   })
    }
    displayProduct(mapId,category){
      this.showProduct(mapId,category);
     
    }
    updateSoldProduct(product){
      this.restApi.updateSoldProduct(product)
   .subscribe(response=>{
     console.log(response);
     
    
   })
    }
   
}