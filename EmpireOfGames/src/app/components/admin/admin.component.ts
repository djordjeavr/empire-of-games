import { Component, OnInit } from '@angular/core';
import { User } from '../registration/User.class';
import { RestApiService } from 'src/app/services/rest-api.service';

import { UserService } from 'src/app/services/UserService.service';
import { Product } from '../home/Product.class';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
isClickedArea1=true;
isClickedArea2=false;
isClickedArea3=false;
isClickedArea4=false;
isClickedArea5=false;
isClickedArea6=false;
isClickedArea7=false;
customers:User[]=[];
products:Product[]=[];

  constructor(private restApi:RestApiService, private userService:UserService,
    public translate:TranslateService) { }

  ngOnInit(): void {
  this.getBestCustomers();
  this.getBestProducts();
  }


  isClickedArea(event){
    const index=event.target.getAttribute('index');
    this.isClickedArea1=false;
    this.isClickedArea2=false;
    this.isClickedArea3=false;
    this.isClickedArea4=false;
    this.isClickedArea5=false;
    this.isClickedArea6=false;
    this.isClickedArea7=false;
    
      if(index==1){
        if(!this.isClickedArea1){
          this.isClickedArea1=true;
        }
        else{
          this.isClickedArea1=false;
        }
      }
      if(index==2){
        if(!this.isClickedArea2){
          this.isClickedArea2=true;
        }
        else{
          this.isClickedArea2=false;
        }
      }
      if(index==3){
        if(!this.isClickedArea3){
          this.isClickedArea3=true;
        }
        else{
          this.isClickedArea3=false;
        }
      }
      if(index==4){
        if(!this.isClickedArea4){
          this.isClickedArea4=true;
        }
        else{
          this.isClickedArea4=false;
        }
      }
      if(index==5){
        if(!this.isClickedArea5){
          this.isClickedArea5=true;
        }
        else{
          this.isClickedArea5=false;
        }
      }
      if(index==6){
        if(!this.isClickedArea6){
          this.isClickedArea6=true;
        }
        else{
          this.isClickedArea6=false;
        }
      }
      if(index==7){
        if(!this.isClickedArea7){
          this.isClickedArea7=true;
        }
        else{
          this.isClickedArea7=false;
        }
      }
     
  }
  getBestCustomers(){
    this.userService.getBestCustomers()
    .subscribe((response:User[])=>{
      this.customers=response;
    })
  }
  getBestProducts(){
    this.restApi.getBestProducts()
    .subscribe((response:Product[])=>{
    this.products=response;
    })
  }

 

}
