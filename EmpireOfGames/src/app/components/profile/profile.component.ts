import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/UserService.service';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Product } from '../home/Product.class';
import { TranslateService } from '@ngx-translate/core';
import { Order_item } from './Order-item.class';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
isClicked:boolean=false;
orders:Order_item[]=[];
  constructor(public userService:UserService,private restApi:RestApiService,
    public translate:TranslateService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  moveToUpdateUser(){
    if(this.isClicked==false){
      this.isClicked=true
    }
    else{
      this.isClicked=false;
    }
  }
  getAllOrders(){
    const userId=this.userService.loggedUser.id;
this.restApi.getAllOrder(userId)
.subscribe((response:Order_item[])=>{
 this.orders=response;
 console.log(response);
 
  
})
  }
}
