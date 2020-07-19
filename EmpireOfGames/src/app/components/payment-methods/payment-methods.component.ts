import { Component, OnInit, Input } from '@angular/core';
import { PaymentMethods } from './PaymentMethods.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Basket } from '../product-item/Basket.class';
import { Order } from './Order.class';
import { UserService } from 'src/app/services/UserService.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {
  payment_methods:PaymentMethods[]=[];
  orders=[];
  order:Order=new Order();
  constructor(private restApi:RestApiService,private userService:UserService,
    public translate:TranslateService,public toastr:ToastrService) { }
   
  @Input() totalPrice:number;
  @Input() products:Basket[];
  ngOnInit(): void {
    this.getAllPaymentMethods();
    
    console.log(this.products);
    
 
    
  }

  getAllPaymentMethods(){
   
    
    this.restApi.getAllPaymentMethods()
    .subscribe((response:PaymentMethods[])=>{
    this.payment_methods=response;
   console.log(this.payment_methods);
   
   
  })
}
SaveOrders(payment_method){
  this.order.user_id=this.userService.loggedUser.id;
 for (let i = 0; i < this.products.length; i++) {
  this.orders.push(this.userService.loggedUser.id);
  this.orders.push(  this.products[i].product_id);
  this.orders.push(this.products[i].item);
  this.orders.push(payment_method);
  this.restApi.saveOrdersForUser(this.orders)
  .subscribe(response=>{
    console.log(response);
    this.toastr.success(this.translate.instant('BuyProduct'))
    
  })
  this.orders=[];
  
 }
 
}

}
