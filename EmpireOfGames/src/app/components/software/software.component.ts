import { Component, OnInit } from '@angular/core';
import { Product } from '../home/Product.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { SearchProduct } from '../games/SearchProduct.class';
import { CommonService } from 'src/app/services/CommonService';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {
  collapsed= { 
    area_hidden:false
 
   }
  
   searchProducts:SearchProduct;
   products:number;
 
  constructor(private restApi:RestApiService,public commonService:CommonService,
    public translate:TranslateService) { }

  ngOnInit(): void {
    this.commonService.allProducts=[];
    this.searchProducts=new SearchProduct();
   this.getAllSoftware();
   this.getTotalNumberOfSoftware();
   
   
    
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
}
getAllSoftware(){
  this.restApi.getAllSoftware()
  .subscribe((response:Product[])=>{
    this.commonService.allProducts=response;
  })
}
searchSoftware(){
    this.restApi.searchForSoftware(this.searchProducts)
    .subscribe((response:Product[])=>{
      this.commonService.allProducts=response;
      
    })   
}
getTotalNumberOfSoftware(){
  this.restApi.getTotalNumberOfSoftware()
  .subscribe(response=>{
    this.products=response[0].numberOfSoftware;   
    
  })
  
  
}
}