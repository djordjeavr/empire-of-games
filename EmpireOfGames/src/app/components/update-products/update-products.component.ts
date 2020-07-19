import { Component, OnInit } from '@angular/core';
import { Product } from '../home/Product.class';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Genre } from '../games/Genre.class';
import { Platform } from '../Platforms.class';
import { Device } from '../games/Device.class';
import { CategorySoftware } from '../menu/CategorySoftware.class';
import { CategoryGiftCard } from '../menu/CategoryGiftCard.class';
import { Category } from '../add-product/Category.class';
import { Company } from '../games/Company.class';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.scss']
})
export class UpdateProductsComponent implements OnInit {
products:Product[]=[];
product:Product=new Product();
genres:Genre[]=[];
platforms:Platform[]=[];
devices:Device[]=[];
category_software:CategorySoftware[]=[];
category_gift_cards:CategoryGiftCard[]=[];
categories:Category[]=[];
companies:Company[]=[];
nameProducts:string;
  constructor(private restApi:RestApiService,private toastr:ToastrService,
    public translate:TranslateService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllGenres();
    this.getAllCategories();
    this.getAllDevices();
    this.getAllPlatforms();
    this.getAllCategoryGiftCards();
    this.getAllCategorySoftware();
    this.getAllCompany();
  }

  getAllProducts(){
    this.restApi.getAllProducts()
    .subscribe((response:Product[])=>{
      this.products=response;
      console.log(this.products);
      
    })
  }
  getAllGenres(){
    this.restApi.getAllGenres()
    .subscribe((response:Genre[])=>{
      this.genres=response
    })
  }
  getAllPlatforms(){
    this.restApi.getAllPlatforms()
    .subscribe((response:Platform[])=>{
      this.platforms=response;
      console.log(this.platforms);
      
    })
  }
  getAllDevices(){
    this.restApi.getAllDevice()
    .subscribe((response:Device[])=>{
      this.devices=response
    })
  }
  getAllCategorySoftware(){
    this.restApi.getAllCategorySoftware()
    .subscribe((response:CategorySoftware[])=>{
      this.category_software=response
    })
  }
  getAllCategoryGiftCards(){
    this.restApi.getAllCategoryGiftCards()
    .subscribe((response:CategoryGiftCard[])=>{
      this.category_gift_cards=response;
      
      
    })
  }
  getAllCategories(){
    this.restApi.getAllCategories()
    .subscribe((response:Category[])=>{
      this.categories=response;
      
      
    })
  }
  getAllCompany(){
    this.restApi.getAllCompanies()
    .subscribe((response:Company[])=>{
      this.companies=response; 
    })
  }
  changeProduct(product){
  this.product=product;
 

  
  }
  saveProduct(){
    this.restApi.updateProduct(this.product)
    .subscribe(response=>{
      this.toastr.success(this.translate.instant( response['message']) ); 
      this.getAllProducts();
    })
  }
  searchAllProducts(){
  
    this.restApi.searchProducts(this.nameProducts)
    .subscribe((response:Product[])=>{
      this.products=response;
       
    })
   }
   deleteProduct(productId){
     
     this.restApi.deleteProduct(productId)
     .subscribe(response=>{
       this.toastr.success(this.translate.instant(response['message']));
       this.getAllProducts();
     })
   }
}
