import { Component, OnInit } from '@angular/core';
import { Product } from './Product.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { CommonService } from 'src/app/services/CommonService';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:Product[]=[];
 public productId:number=2;
  constructor(private restApi:RestApiService,public commonService:CommonService,
    private router:Router,public translate: TranslateService) { }

  ngOnInit(): void {
  this.getAll();
    
  }
  getAll(){
    this.restApi.getAllProducts()
    .subscribe((response:Product[]) =>{
      this.products=response;
      console.log(this.products);
      
    })
  }
  
}
