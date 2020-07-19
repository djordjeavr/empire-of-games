import { Component, OnInit } from '@angular/core';
import { Product } from '../home/Product.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products:Product[]=[]
  constructor(private restApi:RestApiService,public translate:TranslateService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.restApi.getAllProducts()
    .subscribe((response:Product[])=>{
      this.products=response;
      console.log(this.products);
      
    })
    }
}
