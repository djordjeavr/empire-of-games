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
    collapsed= { 
      area_hidden:false,
      area_hidden1:false,
      area_hidden2: false,
      area_hidden3: false,
      area_hidden4: false
     }
 
   
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
       if(index==3){
         if(!this.collapsed.area_hidden2){
           this.collapsed.area_hidden2=true;
         }
         else
         this.collapsed.area_hidden2=false;
       }
       if(index==4){
         if(!this.collapsed.area_hidden3){
           this.collapsed.area_hidden3=true;
         }
         else
         this.collapsed.area_hidden3=false;
       }
       if(index==5){
         if(!this.collapsed.area_hidden4){
           this.collapsed.area_hidden4=true;
         }
         else
         this.collapsed.area_hidden4=false;
       }
     }
   
}